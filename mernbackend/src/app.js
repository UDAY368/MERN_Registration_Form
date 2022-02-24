const express = require('express');
const app = express();
require('./db/connect')

const port = process.env.PORT || 4000;

app.get("/",(req,res) =>{
  res.send("I Love web development");
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})