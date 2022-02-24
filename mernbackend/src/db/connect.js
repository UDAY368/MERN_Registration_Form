const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/studentReg?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"           
).then(() => {
  console.log("Connected to MongoDB");
}).catch((err) =>{
  console.log('Connection Failed');
}) 