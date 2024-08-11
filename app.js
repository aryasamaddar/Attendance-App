const express = require('express');
const path = require('path');
const studentRoutes = require('./routes/student')
const teacherRoutes = require('./routes/teacher')

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get("/roles",(req,res)=>{
    res.render("landing.ejs");
})
app.use(studentRoutes);
app.use(teacherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
