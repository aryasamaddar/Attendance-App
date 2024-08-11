import express from "express";

const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));

//link static files
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("landing.ejs");
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});