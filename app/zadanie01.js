//Twój kod
const express = require("express");

const app = express();


app.get('/:n1/:n2', (req, res) => {
   const n1 = parseInt(req.params.n1);
   const n2 = parseInt(req.params.n2);
   const sum = n1 + n2;
   res.send("Suma: " + sum);
});

app.listen(3000, ()=> {
   console.log('server on localhost:3000');
});