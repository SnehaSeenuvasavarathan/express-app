const { verify } = require('crypto');
const express = require('express');
const path = require('path');

const secretmessage = "sinloveyag"
const commonmessage = "hello"

function verifyPassword(password) {
    if (password === secretmessage) {
        return true
    }
    return false
}

const app = new express();

app.use(express.json());
app.use(express.static(path.join("public")));

app.get('/', (req, res) => {
    res.send(commonmessage);
});

app.get('/home/', (req, res) => {
    res.sendFile(path.join( __dirname, 'public/index.html'));
});

app.post('/api/send', async (req, res) => {
    const a = req.body.data;
    console.log(a)
    verify = verifyPassword(a)
    if (verify) {
        res.send({"ans": "Super"})
    }
    else {
        res.send({"ans": "wrong"})
    }
});

app.listen(3003, ()=> console.log("Listening on port 3000..."));