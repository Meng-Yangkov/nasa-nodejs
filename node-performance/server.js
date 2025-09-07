const express = require('express');

const app = express();

function delay(duration){
  const startTime = Date.now();
  while(Date.now() - startTime < duration){
    //event loop is block
  }
}

app.get('/', (req, res) => {
  res.send('Hello dear! this is my home');
})

app.get('/timer', (req, res) => {
  delay(9000);
  res.send('Halo Dexte, ding ding ding!');
})

app.listen(3000);