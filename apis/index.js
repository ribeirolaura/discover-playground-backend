
//chama módulo do express e guarda na constante 
const express = require('express'); 

//inicializa o express
const app = express()

//fica ouvindo o navegador e quando recebe o parametro que é o número da porta 
app.listen('3000'); 


//GET
app.route('/').get((req, res) => res.send(author))


//middleware - ponte entre as requisições, super necessário fazer 
app.use(express.json())

//POST 
// app.route('/').post((req, res) => res.send(req.body))

let author = "Laura";
//PUT 
app.route('/').put((req, res) => {
    author = req.body.author; 
    res.send(author); 
})

//DELETE 

    app.route('/:identificador').delete((req, res) => {
        res.send(req.params.identificador)
    })