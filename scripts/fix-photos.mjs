// Runs before every build. Converts iPhone HEIC photos in src/content to JPG
// (browsers other than Safari can't show HEIC) and updates index.md to match.
import fs from "node:fs";
import path from "node:path";
import convert from "heic-convert";

const root = "src/content";

function* walk(dir) {
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, d.name);
    if (d.isDirectory()) yield* walk(p);
    else yield p;
  }
}

let changed = 0;
for (const file of walk(root)) {
  if (!/\.(heic|heif)$/i.test(file)) continue;
  const buf = fs.readFileSync(file);
  const isJpeg = buf[0] === 0xff && buf[1] === 0xd8; // some "HEIC" files are really JPEGs
  const out = file.replace(/\.(heic|heif)$/i, ".jpg");
  fs.writeFileSync(out, isJpeg ? buf : Buffer.from(await convert({ buffer: buf, format: "JPEG", quality: 0.9 })));
  fs.unlinkSync(file);

  const md = path.join(path.dirname(file), "index.md");
  if (fs.existsSync(md)) {
    const name = path.basename(file);
    const text = fs.readFileSync(md, "utf8").split(name).join(path.basename(out));
    fs.writeFileSync(md, text);
  }
  console.log(`converted ${file} -> ${out}`);
  changed++;
}
if (changed === 0) console.log("fix-photos: no HEIC files");
