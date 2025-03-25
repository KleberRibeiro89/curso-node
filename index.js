const express = require('express');
const pessoaRoute = require('./src/routes/pessoaRoute');
const app = express()

app.use(express.json())

app.use(pessoaRoute)

app.listen(3000, () => {
    console.log("Serviço rodando na porta 3000")
});