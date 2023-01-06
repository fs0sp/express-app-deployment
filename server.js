require('dotenv').config();

const express = require('express');
const app = express();

const data = require('./temp');
const port = process.env.PORT;
const name = process.env.NAME;

app.get('/', (req, res)=> {
  res.send('My name is : ',name);
})

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("...", port);
});
