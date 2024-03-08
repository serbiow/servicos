const Sequelize = require("sequelize")
const sequelize = new Sequelize ("dbAula", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado com Sucesso!")
}).catch(function(erro){
    console.log("Falha ao conectar: " + erro)
})

const agendamentos = sequelize.define("agendamentos", {
    nome:{
        type: Sequelize.STRING
    },
    cep:{
        type: Sequelize.CHAR(8)
    },
    endereco:{
        type: Sequelize.STRING
    },
    numero:{
        type: Sequelize.STRING
    },
    bairro:{
        type: Sequelize.STRING
    },
    cidade:{
        type: Sequelize.STRING
    },
    estado:{
        type: Sequelize.CHAR(2)
    },
    observacao:{
        type: Sequelize.STRING
    }
})

//agendamentos.sync({force: true})

module.exports = agendamentos;