const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Empty array to store experiences
let experiences = [];

// Get all experiences
app.get("/api/experiences", (req, res) => {
  res.json(experiences);
});

// Get a single experience by ID
app.get("/api/experiences/:id", (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");
  res.json(experience);
});

// Add a new experience
app.post("/api/experiences", (req, res) => {
  const newExperience = {
    id: experiences.length + 1,
    title: req.body.title,
    job: req.body.job,
    technology: req.body.technology,
    githubLink: req.body.githubLink,
    image: req.body.image
  };
  experiences.push(newExperience);
  res.status(201).json(newExperience);
});

// Update an experience by ID
app.put("/api/experiences/:id", (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");

  experience.title = req.body.title;
  experience.job = req.body.job;
  experience.technology = req.body.technology;
  experience.githubLink = req.body.githubLink;
  experience.image = req.body.image;

  res.json(experience);
});

// Delete an experience by ID
app.delete("/api/experiences/:id", (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");

  const index = experiences.indexOf(experience);
  experiences.splice(index, 1);

  res.json(experience);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
