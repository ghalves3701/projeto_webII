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

app.get('/sobre', (reg, res) => {
    console.log("Rota sobre encontrada!")
    res.send("<br><h1>Sobre</h1>" + 
            "<br><h2> EleckIO </h2>" +
            "<br><h2> Somos uma empresa Francana, inaugurada em 2019 com o intuito de prestar serviços à comunidade, em 2025 decidimos ampliar o campo e iniciamos a venda de produtos que utilizávamos em nosso trabalho. <br> Com a evolução do mercado digital, criamos esse site para impulsionarmos nossas vendas. </h2>")
})

app.get('/contato', (reg, res) => {
    console.log("Rota contato encontrada!")
    res.send("<br><h1>Contato</h1>" + 
            "<br><h2>  WhatsApp: 16 98808-1614 </h2>" +
            "<br><h2 Instagram: @eleckio")
})

app.get('/missao', (reg, res) => {
    console.log("Rota Missão encontrada!")
    res.send("<br><h1>Missão</h1>" + 
            "<br><h2> Oferecer soluções elétricas seguras, inovadoras e sustentáveis, com produtos de qualidade e serviços especializados, garantindo eficiência energética, confiança e satisfação para nossos clientes.")
})

app.get('/visao', (reg, res) => {
    console.log("Rota Visão encontrada!")
    res.send("<br><h1>Visão</h1>" + 
            "<br><h2> Ser referência no mercado de produtos elétricos e serviços, reconhecida pela excelência, inovação e compromisso com a sustentabilidade, tornando-se a primeira escolha de clientes e parceiros.")
})

app.get('/valores', (reg, res) => {
    console.log("Rota Valores encontrada!")
    res.send("<br><h1>Valores </h1>" + 
            "<br><h2 - Segurança: priorizamos a proteção de pessoas e ambientes em todas as soluções<h2>"+ 
            "<br><h2>- Qualidade: trabalhamos apenas com produtos e serviços que asseguram desempenho confiável.</h2>" +
            "<br><h2>- Inovação: buscamos constantemente novas tecnologias e práticas modernas.</h2>" +
            "<br><h2>- Sustentabilidade: promovemos o uso consciente da energia e soluções que reduzem impactos ambientais.</h2>" +
            "<br><h2>- Compromisso com o cliente: colocamos a satisfação e confiança dos clientes no centro de nossas ações.</h2>" +
            "<br><h2>- Ética e transparência: conduzimos nossos negócios com responsabilidade e clareza. </h2>")
})


app.get('/equipe', (reg, res) => {
    console.log("Rota equipe encontrada!")
    res.send("<br><h1>Equipe</h1>" + 
            "<br><h2> Somos mais de 15 Colaboradores, veja as fotos no nosso Instagram </h2>" +
            "<br><h2> Instagram: @eleckio</h2>")
})

app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/erro404.html');
});


//instanciar o servidor web

try{
    app.listen(port, ()=> {
        console.log(`\n Servidor Rodando em http://localhost:${port}`)
    })
    
}
catch (error){

    console.log("Ocorreu um ERRO ao inicializar o servidor Web")
}