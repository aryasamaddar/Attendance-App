import express from 'express';
import studentRoutes from './routes/student.js'
import teacherRoutes from './routes/teacher.js'

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.get("/roles",(req,res)=>{
    res.render("roles.ejs");
})

app.get("/dashboard",(req,res)=>{
    res.render("dashboard.ejs",{sts: "0"});
})

app.use(studentRoutes);
app.use(teacherRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
