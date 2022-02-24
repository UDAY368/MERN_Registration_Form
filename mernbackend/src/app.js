const express = require('express');
const path = require('path');

const app = express();
require('./db/connect')

const staticPath = path.join(__dirname, '../public');
app.use(express.static(staticPath));
app.set('view engine', 'hbs');

const port = process.env.PORT || 4000;

app.get("/",(req,res) =>{
  res.render("index");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})