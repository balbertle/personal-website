# personal-website

A static site built with [Astro](https://astro.build) and hosted on Netlify. There is no server, so pages load instantly.

Two separate parts:

- **Journal** at `/`: photos and videos, each with one short caption.
- **Portfolio** at `/portfolio/`: experience, projects (with filters), education, and coursework. Each project has its own page.

## Adding content

**From the browser (works on your phone):** go to `https://<your-domain>/admin/` and sign in with GitHub. There are three sections:

- **Journal:** add a photo, a short `.mp4` clip, or a YouTube link, plus a date and caption.
- **Projects:** add or edit a project.
- **Portfolio page:** your email, resume PDF, links, experience, education, and coursework. The email and resume buttons appear once you fill them in.

Saving commits to GitHub, and Netlify rebuilds the site in about a minute.

**From your laptop:**

```
src/content/journal/<name>/index.md      + the photo
src/content/projects/<name>/index.md     + the images
src/data/portfolio.json                  experience, education, coursework, links
public/journal-media/                    video files
```

Copy an existing folder, change the text and images, and push. iPhone `.heic` photos are converted to `.jpg` automatically at build time. All images are resized and compressed during the build, so upload full-size originals. Keep video clips short; Git is not a good place for large files, so put longer videos on YouTube (unlisted works) and paste the link.

## Running locally

```
npm install
npm run dev        # http://localhost:4321
npm run build      # output in dist/
```

## Admin sign-in setup (one time)

The admin page uses [Sveltia CMS](https://github.com/sveltia/sveltia-cms). For the "Sign In with GitHub" button:

1. On GitHub, go to Settings → Developer settings → OAuth Apps → New OAuth App. Set the homepage URL to your site and the callback URL to `https://api.netlify.com/auth/done`.
2. In Netlify, open the site, then go to Project configuration → Access & security → OAuth → Install provider → GitHub. Paste the client ID and secret.

Without this, you can still use "Sign In Using Access Token" with a GitHub fine-grained token that has Contents read/write access to this repo.
