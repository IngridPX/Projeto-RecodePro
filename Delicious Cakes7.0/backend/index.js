const express = require ('express');
const mysql = require('mysql');
const server = express();
const cors = require ('cors');
const bodyParser = require('body-parser');

server.use(express.json())
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors ())
server.use(bodyParser.json());

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "dbDeliciousCakes"
})

server.get ("/bolos", (req, res)=> {

    const query = "SELECT produtos.nome, produtos.descricao, produtos.nome_imagem, precos.preco, precos.preco_desconto"
    " FROM produtos JOIN precos ON produtos.id_prod = precos.id_preco";
    connection.query(query, (error, result) =>{
        if (error){
            res.send(error)
        } else {
            res.json(result)
        }

    })
});

server.post("/pedido", (req, res)=> {
    const {nome_cliente, endereco, telefone, nome_produto, valor_unit, quantidade, valor_total} = req.body;

    connection.query(`Insert into pedidos() values
    ('${nome_cliente}', '${endereco}','${telefone}', '${nome_produto}','${valor_unit}', '${quantidade}','${valor_total}')`, (error, result) =>{
    
            if (error) {
                res.send(error)
            } else {
                res.status(201).send ("Pedido Realizado com sucesso!")
            }
        
    })


});

server.post("/contato", (req, res)=> {
    const {categoria, nome, sobrenome, telefone, email, descricao} = req.body;

    connection.query(`Insert into recado() values
    ('${categoria}', '${nome}','${sobrenome}', '${telefone}','${email}', '${descricao}')`, (error, result) =>{
    
            if (error) {
                res.send(error)
            } else {
                res.status(201).send ("Mensagem enviada!")
            }
        
    })


});

server.listen(8000);