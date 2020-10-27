Create database dbDeliciousCakes;
use dbDeliciousCakes;

Create table produtos(
id_prod int primary key auto_increment not null,
nome varchar (30) not null,
descricao varchar(30) not null,
preco decimal ( 4 , 2 ) not null,
preco_desconto decimal ( 4 , 2 ), 
nome_imagem varchar(30) not null
)CHARSET utf8;

Create table pedidos(
id_ped int primary key auto_increment not null,
nome_cliente varchar (30) not null,
endereco varchar(30) not null,
telefone varchar(30) not null,
nome_produto varchar(30) not null,
valor_unit decimal ( 4 , 2 ) not null,
quantidade int not null,
valor_total decimal ( 4 , 2 ) not null
)CHARSET utf8;
