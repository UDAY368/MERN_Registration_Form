const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
require('./db/connect')
const Register = require('./models/reg');

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templets/views');
const partialsPath = path.join(__dirname, '../templets/partials');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

const port = process.env.PORT || 4000;

app.get("/",(req,res) =>{
  res.render("index");
})

app.post("/register", async (req,res) =>{
  try {
    const password = req.body.password;
    const cPassword = req.body.confirmPassword;

    if(password === cPassword){
      const registerStudent = new Register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phone: req.body.phone,
        password: password,
        confirmPassword: cPassword,
        gender:req.body.gender,
        age:req.body.age
      })
      const registeredData = await registerStudent.save();
      res.status(200).send("<h3>Successfully Registered</h3>")

    }else{
      res.send("Password and Confirm Password does not match");
    }

  } catch(error){
    res.status(400).send(error);
  }
})


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})