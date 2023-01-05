require('dotenv').config();

const express = require('express');
const app = express();

const data = require('./temp');
const port = process.env.PORT;

app.get('/', (req, res)=> {
  res.send('please check /data');
})

app.get('/data', (req, res) => {
  res.send(data);
});

app.listen(port, () => {
  console.log("...", port);
});
