import express from "express";
const router = express.Router();
import collection from "../connect.js";

router.get("/sLogin", (req, res) => {
  res.render("sLogin.ejs");
});

router.get("/sRegister", (req, res) => {
  res.render("sRegister.ejs");
});

router.post("/sRegister", async (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    accType: "student",
  };
  const userExists = await collection.findOne({ email: data.email });

  if (userExists) {
    // res.send("User exists");
    res.render("dashboard.ejs", { sts: "User exists" });

  } else {
    const userdata = await collection.insertMany(data);
    console.log(userdata);
    // res.send("Account created");
    res.render("dashboard.ejs", { sts: "Account created" });
  }
});

router.post("/sLogin", async (req, res) => {
  try {
    const check = await collection.findOne({ email: req.body.email });
    if (!check) {
      res.send("user not found");
    } else {
      const equals = req.body.password === check.password;
      if (equals) {
        res.send("Logged in");
      } else {
        res.send("Wrong password");
      }
    }
  } catch {
    res.sendStatus(404).send("Error");
  }
});

export default router;
