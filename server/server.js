const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const cors = require("cors"); 
const app = express();
const port = 3000;


app.use(express.json());


app.use(cors()); 

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); 
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); 
  }
});

const upload = multer({ storage: storage });


let experiences = [];


app.get("/api/experiences", (req, res) => {
  res.json(experiences);
});


app.get("/api/experiences/:id", (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");
  res.json(experience);
});


app.post("/api/experiences", upload.single('image'), (req, res) => {
  const newExperience = {
    id: experiences.length + 1,
    title: req.body.title,
    job: req.body.job,
    technology: req.body.technology,
    githubLink: req.body.githubLink,
    image: req.file ? req.file.path : null 
  };
  experiences.push(newExperience);
  res.status(201).json(newExperience);
});


app.put("/api/experiences/:id", upload.single('image'), (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");

  experience.title = req.body.title;
  experience.job = req.body.job;
  experience.technology = req.body.technology;
  experience.githubLink = req.body.githubLink;
  experience.image = req.file ? req.file.path : experience.image; 

  res.json(experience);
});


app.delete("/api/experiences/:id", (req, res) => {
  const experience = experiences.find(exp => exp.id === parseInt(req.params.id));
  if (!experience) return res.status(404).send("Experience not found");

  const index = experiences.indexOf(experience);
  experiences.splice(index, 1);


  if (experience.image) {
    fs.unlink(experience.image, (err) => {
      if (err) {
        console.error(`Failed to delete image file: ${experience.image}`, err);
      } else {
        console.log(`Successfully deleted image file: ${experience.image}`);
      }
    });
  }

  res.json(experience);
});


app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
