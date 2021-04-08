const express = require("express");
const app = express();
const mongoose = require('mongoose')
const db = require('./config/keys').mongoURI

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(()=> console.log('mongo is a gogo'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send("HEY YOU MADE IT!"))


const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server has served on port ${port}`))