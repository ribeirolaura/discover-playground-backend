// criação da api 

const express = require('express');

const app = express(); 

app.listen('3000');

app.use(express.json())

app.route('/').post((req, res) => {
const {content, favoritefood} = req.body; 

res.send(`${content} e ${favoritefood} da laura`)

})