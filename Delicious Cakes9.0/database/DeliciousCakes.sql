create database dbDeliciousCakes;
use dbDeliciousCakes;

Create table produtos(
id_prod int primary key auto_increment not null,
nome varchar (30) not null,
descricao text not null,
preco decimal ( 6 , 2 ) not null,
preco_desconto decimal ( 6 , 2 ),
nome_imagem text not null
)CHARSET utf8;

Create table pedidos(
id_ped int primary key auto_increment not null,
nome_cliente varchar (30) not null,
endereco varchar(30) not null,
telefone varchar(30) not null,
nome_produto varchar(30) not null,
valor_unit decimal ( 4 , 2 ) not null,
quantidade varchar(10) not null,
valor_total decimal ( 4 , 2 ) not null
)CHARSET utf8;

Create table recado(
id_rec int primary key auto_increment not null,
categoria varchar (30) not null,
nome varchar (30) not null,
sobrenome varchar (30) not null,
telefone varchar (30) not null,
email varchar (30) not null,
descricao varchar (30) not null
)CHARSET utf8;

Insert into produtos()values(default,'Bolo de Aipim Cremoso','Bolos Caseiros','20.00','17.00','bolo_aipim_cremoso_kg_86042.jpg.jpg'
),
(default,'Bolo de Queijo Cremoso','Bolos Caseiros','40.00','34.00','imagens/bolo_queijo.png'
),
(default,'Bolo Formigueiro','Bolos Caseiros','20.00','17.00','imagens/bolo_formiga.png'
),
(default,'Cenoura com Chocolate','Bolos com Calda','40.00','34.00','imagens/bolo_cenoura.png'
),
(default,'Red Velvet com Ninho','Bolos com Calda','50.00','42.50','imagens/bolo_red.png'
),
(default,'Baunilha com Ganache','Bolos de Festa','120.00','102.00','imagens/Bolo_baunilha.png'
),
(default,'Chocolate com Framboesa','Bolos de Festa','150.00','127.50','imagens/bolo1.jpg'
),
(default,'PÃ£o de LÃ³ com Nozes','Bolos de Festa','150.00','127.50','imagens/bolo.jpg'
),
(default,'Bolo de Ninho com Morango','Bolos de Pote','5.00','3.40','imagens/Bolo-pote-morango.png'
),
(default,'Bolo de Floresta Negra','Bolos de Pote','5.00','3.40','imagens/floresta_negra.png'
),
(default,'Bolo de PaÃ§oca','Bolos de Pote','5.00','3.40','imagens/bolo de pote-pacoca.jpg'
),
(default,'Bolo de Mousse de LimÃ£o','Bolos de Pote','5.00','3.40','imagens/limao.png'
),
(default,'Bolo de Mousse de Maracuja','Bolos de Pote','5.00','3.40','imagens/maracuja.png'
),
(default,'Bolo Funcional de Abacaxi','Bolos Funcional','30.00','25.00','imagens/bolofuncional.png'
),
(default,'Cheesecake de PaÃ§oca','Cheesecakes sem Forno','40.00','34.00','imagens/Cheesecake.png'
),
(default,'Rocambole de Prestigio','Rocambole','15.00','12.50','Imagens/rocambole_de_prestigio.jpg'
),
(default,'Rocambole de Doce de Leite','Rocambole','15.00','12.50','Imagens/rocambole-creme.jpg'
);


select * from pedidos;