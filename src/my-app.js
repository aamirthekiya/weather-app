const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Path variable.
const publicDirPath = path.join(__dirname, "../public/");
const viewDirPath = path.join(__dirname, "../templates/views"); // If you change viwes folder to some another name.
const partialsDirPath = path.join(__dirname, "../templates/partials");
// hbs dir path setting and view engine setting.
app.set("views", viewDirPath);
app.set("view engine", "hbs");
hbs.registerPartials(partialsDirPath);

// Setting Static dir path
app.use(express.static(publicDirPath));

//
app.get("", (req, res) => {
  res.render("index", { name: "Aamir Thekiya" });
});

app.get("/about", (req, res) => {
  res.render("about", { name: "Aamir Thekiya", imgurl: "images/aamir.jpg" });
});

app.get("/about/*", (req, res) => {
  res.render("404error", {
    errorMessage: "About artical not found",
    name: "Aamir Thekiya",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    help: "This is help message...",
    name: "Aamir Thekiya",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404error", {
    errorMessage: "Help artical not found",
    name: "Aamir Thekiya",
  });
});

app.get("/weather", (req, res) => {
  res.send({ Temperature: 30, Humidity: 88 });
});

app.get("/weather/*", (req, res) => {
  res.render("404error", {
    errorMessage: "Weather artical not found",
    name: "Aamir Thekiya",
  });
});

app.get("*", (req, res) => {
  res.render("404error", {
    errorMessage: "Error 404 page not found",
    name: "Aamir Thekiya",
  });
});

app.listen(3000, () => {
  console.log("Server is running at port 3000");
});
