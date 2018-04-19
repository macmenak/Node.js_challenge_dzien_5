//Twój kod

const express = require("express");

const app = express();

app.use(express.static('./public/zadanieDnia/'));

let votes = {
    "yes": 0,
    "no": 0,
    "maybe": 0
};

app.get('/vote/:votetype', (req, res) => {
    const voteType = req.params.votetype;
    votes[voteType] ++;
    res.send("Dziekujemy za glos.");
});

app.get('/votes/check', (req, res) => {
    let results="";

    Object.entries(votes).forEach((entry) => {
        const [key, value] = entry;
        results += `<br>${key}: ${value}`;
    });
    res.send(`Wyniki ankiety: ${results}`);


});

app.listen(3000, () => {
   console.log("server on localhost:3000");
});