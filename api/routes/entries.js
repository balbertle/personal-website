const express = require("express");
const router = express.Router();

let projects = [
  {
    id: 1,
    title: "January 2025",
    description: "snow at tech",
    imageUrl: "http://localhost:3000/images/IMG_1747.png",
  },
  {
    id: 2,
    title: "July 2025",
    description: "nyc with ryanh",
    imageUrl: "http://localhost:3000/images/IMG_4010.HEIC",
    diaryText: "no entry"
  },
  {
    id: 3,
    title: "July 2025",
    description: "nyc with ryanh",
    diaryText: "no entry",
    imageUrl: "http://localhost:3000/images/IMG_4033.HEIC",
  }
];

router.get("/", (req, res) => {
  res.json(projects);
});

// GET request to /api/projects
router.get("/:id", (req, res) => {
  const project = projects.find(p => p.id === parseInt(req.params.id));

  if (!project) {
    return res.status(404).json({message: 'not found'})
  }
  res.json(project);
});


module.exports = router;
