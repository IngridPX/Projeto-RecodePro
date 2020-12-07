import React, {useState, useEffect} from 'react';
import Bolo from '../Componentes/bolo';
import {Container, Row} from 'react-bootstrap';

export default function Bolos(){
    const [produtos, setProdutos] = useState([]);
    useEffect(async() => {
        const resposta = await fetch("http://localhost/conexao.php")
        const dados = await resposta.json();
        setProdutos(dados);
    }, []);

    return(
        <Container>
            <Row>
                {produtos && produtos.map(item => <Bolo categoria={item.nome} descricao={item.descricao} preco={item.preco} preco_desconto={item.preco_desconto} imagem={item.nome_imagem}/>)}
            </Row>
        </Container>
    )
}
