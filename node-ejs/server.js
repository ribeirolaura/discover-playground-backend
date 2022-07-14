const express = require("express") 

const app = express(); 

// ferramenta que será utilizada para renderizar html view engine- usando o ejs)
app.set("view engine", "ejs")

//criação de uma rota 
//barra é o dominio do site ex laura.com.br/
app.get("/", function(req, res) {

    const items = [
        {
            title: 'laura',
            message: 'ribeiro'
        },
        {
            title: 'lorena',
            message: 'ribeiro' 
        },
        {
            title: 'ellen',
            message: 'melo'
        },
    ]
    res.render("pages/index", {qualities: items})
} 
)

//rota sobre - renderizará o arquivo about

app.get("/sobre", function(req, res){
    res.render("pages/about"); 
} )


app.listen(8080); //porta 8080
console.log("rodando....") 