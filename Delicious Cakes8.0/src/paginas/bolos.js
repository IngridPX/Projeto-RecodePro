import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Bolos from '../database/Bolos';

export default function Produtos() {
  const dispatch = useDispatch();
  const produtos = useSelector((state) => state.produtos);

  const cart = useSelector((state) =>
    state.cart.filter((item) => item.qty > 0)
  );

  return(
    <Container>
    <h2 className="titulo"> Bolos </h2>
      <Row>
        {Bolos.map((item) => (
        <figure className="produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto">
            <img className="logo" src={item.nome_imagem} alt="Imagem de Produtos"/>
            <figcaption>
                <p className="nome-prod">
                    {item.nome}
                </p>
                <p className="preco">
                    R${item.preco}
                </p>
                <center><button onClick={() => dispatch({ type: 'adicionaProduto', id: item.id })} class ="btnComprar btn-primary" id ="btnComprar">Encomendar</button></center>
            </figcaption>
        </figure>
        ))}
        </Row>
    </Container>
  );

}