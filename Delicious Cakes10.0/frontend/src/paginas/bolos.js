import React, {useState, useEffect} from 'react';
import Bolo from '../Componentes/bolo';
import {Container, Row} from 'react-bootstrap';

export default function Bolos(){
    const [produtos, setProdutos] = useState([]);
    useEffect(() => {
        async function fetchData(){
            const resposta = await fetch("http://localhost:8000/bolos")
        const dados = await resposta.json();
        setProdutos(dados);
        console.log(dados);
        }
        fetchData();
    }, []);

    return(
        <Container>
            <Row>
                {produtos && produtos.map(item => <Bolo categoria={item.nome} descricao={item.descricao} preco={item.preco} preco_desconto={item.preco_desconto} nome_imagem={item.nome_imagem} />)}
            </Row>
        </Container>
    )
}
