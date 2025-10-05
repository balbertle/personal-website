const express = require("express");
const router = express.Router();

let projects = [
  {
    id: 1,
    title: "January 2025",
    description: "snow at tech",
    image: "images/IMG_1747.png",
  },
  {
    id: 2,
    title: "July 2025",
    description: "nyc with ryanh",
    image: "images/IMG_4010.HEIC",
    diaryText: "no entry",
  },
  {
    id: 3,
    title: "July 2025",
    description: "nyc with ryanh",
    diaryText: "no entry",
    image: "images/IMG_4033.HEIC",
  },
];

function makeImageUrl(req, imagePath) {
  const base =
    process.env.BASE_API_URL || `${req.protocol}://${req.get("host")}`;
  return `${base}/${imagePath.replace(/^\/+/, "")}`;
}

router.get("/", (req, res) => {
  const withUrls = projects.map((p) => ({
    ...p,
    imageUrl: p.image ? makeImageUrl(req, p.image) : undefined,
  }));
  res.json(withUrls);
});

// GET request to /api/projects
router.get("/:id", (req, res) => {
  const project = projects.find((p) => p.id === parseInt(req.params.id));

  if (!project) {
    return res.status(404).json({ message: "not found" });
  }

  res.json({
    ...project,
    imageUrl: project.image ? makeImageUrl(req, project.image) : undefined,
  });
});

module.exports = router;
