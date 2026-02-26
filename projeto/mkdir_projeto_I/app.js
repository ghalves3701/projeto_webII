const express = require("express")
const app = express()
const port = 3000

// criação da nota raiz

app.get('/', (reg, res) => {
    console.log("Rota Raiz encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Rota Raiz encontrada</h2>" +
            "<br><h2> Bem vindo ao servidor Express</h2>")
})


// Criação rota cidade de nascimento

app.get('/cidade_natal', (reg, res) => {
    console.log("Rota Cidade natal encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Sacramento-MG </h2>" +
            "<br><h2> Cidade da Terra Roxa </h2>")
})

app.get('/cidade_natal/localizacao', (reg, res) => {
    console.log("Rota cidade_natal/localização encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Localização </h2>" +
            "<br><h2>  Sul de Minas </h2>")
})

//instanciar o servidor web

try{
    app.listen(port, ()=> {
        console.log(`\n Servidor Rodando em http://localhost:${port}`)
    })
    
}
catch (error){

    console.log("Ocorreu um ERRO ao inicializar o servidor Web")
}