const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000; // default set port to 3000

const cors = require("cors");

app.use(cors());
app.use(express.json());

const journalRoutes = require("./routes/entries");
const projectRoutes = require("./routes/projects");

app.use(express.static("public"));

app.use("/api/journal", journalRoutes);
app.use("/api/projects", projectRoutes);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong on the server!' });
});

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
