const express = require('express');
const path = require('path');
const hbs = require('hbs');

const app = express();
require('./db/connect')

const staticPath = path.join(__dirname, '../public');
const templatePath = path.join(__dirname, '../templets/views');
const partialsPath = path.join(__dirname, '../templets/partials');

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', templatePath);
hbs.registerPartials(partialsPath);

const port = process.env.PORT || 4000;

app.get("/",(req,res) =>{
  res.render("index");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})