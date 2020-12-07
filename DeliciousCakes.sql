create database dbDeliciousCakes;
use dbDeliciousCakes;

Create table produtos(
id_prod int primary key auto_increment not null,
nome varchar (30) not null,
descricao text not null,
nome_imagem text not null
)CHARSET utf8;

Create table precos(id_preco int primary key auto_increment not null,
preco decimal ( 6 , 2 ) not null,
preco_desconto decimal ( 6 , 2 )
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

Insert into produtos()values(default,'Bolo de Aipim Cremoso','Bolos Caseiros','https://apucarana.cidadecancao.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/b/o/bolo_aipim_cremoso_kg_86042.jpg_1.jpg'
),
(default,'Bolo de Queijo Cremoso','Bolos Caseiros','imagens/bolo_queijo.png'
),
(default,'Bolo Formigueiro','Bolos Caseiros','imagens/bolo_formiga.png'
),
(default,'Cenoura com Chocolate','Bolos com Calda','imagens/bolo_cenoura.png'
),
(default,'Red Velvet com Ninho','Bolos com Calda','imagens/bolo_red.png'
),
(default,'Baunilha com Ganache','Bolos de Festa','imagens/Bolo_baunilha.png'
),
(default,'Chocolate com Framboesa','Bolos de Festa','imagens/bolo1.jpg'
),
(default,'Pão de Ló com Nozes','Bolos de Festa','imagens/bolo.jpg'
),
(default,'Bolo de Ninho com Morango','Bolos de Pote','imagens/Bolo-pote-morango.png'
),
(default,'Bolo de Floresta Negra','Bolos de Pote','imagens/floresta_negra.png'
),
(default,'Bolo de Paçoca','Bolos de Pote','imagens/bolo de pote-pacoca.jpg'
),
(default,'Bolo de Mousse de Limão','Bolos de Pote','imagens/limao.png'
),
(default,'Bolo de Mousse de Maracuja','Bolos de Pote','imagens/maracuja.png'
),
(default,'Bolo Funcional de Abacaxi','Bolos Funcional','imagens/bolofuncional.png'
),
(default,'Cheesecake de Paçoca','Cheesecakes sem Forno','imagens/Cheesecake.png'
),
(default,'Rocambole de Prestigio','Rocambole','Imagens/rocambole_de_prestigio.jpg'
),
(default,'Rocambole de Doce de Leite','Rocambole','Imagens/rocambole-creme.jpg'
);

Insert into precos()values(default,'20.00','17.00'
),
(default,'40.00','34.00'
),
(default,'20.00','17.00'
),
(default,'40.00','34.00'
),
(default,'50.00','42.50'
),
(default,'120.00','102.00'
),
(default,'150.00','127.50'
),
(default,'150.00','127.50'
),
(default,'5.00','3.40'
),
(default,'5.00','3.40'
),
(default,'5.00','3.40'
),
(default,'5.00','3.40'
),
(default,'5.00','3.40'
),
(default,'30.00','25.00'
),
(default,'40.00','34.00'
),
(default,'15.00','12.50'
),
(default,'15.00','12.50'
);

select * from pedidos;
SELECT produtos.nome, produtos.descricao, produtos.nome_imagem, precos.preco, precos.preco_desconto
    FROM produtos JOIN precos ON produtos.id_prod = precos.id_preco;