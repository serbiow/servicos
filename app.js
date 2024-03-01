const Sequelize = require("sequelize")
const sequelize = new Sequelize ("dbAula", "root", "",{
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(function(){
    console.log("Conectado com Sucesso!")
}).catch(function(erro){
    console.log(erro)
})