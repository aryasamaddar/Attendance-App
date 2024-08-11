import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/role", (req, res) => {
  res.render("landing.ejs");
});

app.get("/sLogin", (req, res) => {
  res.render("sLogin.ejs");
});

app.get("/sRegister", (req, res) => {
  res.render("sRegister.ejs");
});

app.get("/tLogin", (req, res) => {
  res.render("tLogin.ejs");
});

app.get("/tRegister", (req, res) => {
  res.render("tRegister.ejs");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
