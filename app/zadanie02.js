//Twój kod

const express = require("express");

const app = express();

let name = "";

app.get('/name/set/:imie', (req, res) => {
    name = req.params.imie;
    res.send("name set");
});

app.get('/name/show', (req, res) => {
    res.send("name is: " + name);
});

app.get('/name/check', (req, res) => {
    const message = (name.length > 0) ? "imie ustawione" : "imie nieustawione";
    res.send(message);
});

app.listen(3000, () => {
   console.log("server on localhost:3000");
});