import express from 'express';
const router = express.Router()
import collection from '../connect.js'


router.get("/tLogin", (req, res) => {
    res.render("tLogin.ejs");
  });
  
router.get("/tRegister", (req, res) => {
    res.render("tRegister.ejs");
  });


router.post("/tRegister", async (req, res) => {
    const data = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        accType: "teacher"
    }
    const userExists = await collection.findOne({email: data.email});
    
    if(userExists){
        res.send("User exists");
    }
    else{
        const userdata = await collection.insertMany(data);
        console.log(userdata);
        res.send("Account created");
    }

});

router.post("/tLogin", async (req, res) => {
    try{
        const check = await collection.findOne({email: req.body.email});
        if(!check){
            res.send("user not found");
        }
        else{
        const equals = (req.body.password === check.password);
        if(equals){
            res.send("Logged in")
        }
        else{
            res.send("Wrong password");
        }}
    }catch{
        res.sendStatus(404).send("Error");
    }
});

export default router;