const express = require('express')

const app = express();
const porta = 3000;
app.get('/', (req, res) => {
    res.send('Hello World ç á test')
})

app.listen(porta,  ()=>{
    console.log(`servidor rodando na porta ${porta}`)
})