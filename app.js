const express = require("express")
const app = express()
const agendamentos = require("./banco")

app.listen(8081, function(){
    console.log("Servidor ativo!'")
})

app.get("/", function(req,res){
    res.send("Página Principal")
})

app.get("/cadastrar/:nome/cep:/:endereco/:bairro/:cidade/:estado/:observacao", (req,res) => {
    agendamentos.create({
        //nome: "Rogério Carlos"
        nome: req.params.nome,
        cep: req.params.cep,
        endereco: req.params.endereco,
        bairro: req.params.bairro,
        cidade: req.params.cidade,
        estado: req.params.estado,
        observacao: req.params.observacao
    });
    res.send("Salvo com sucesso.")
})