import '../estilo.css';
import { Container } from 'react-bootstrap';
import forma from './forma_pagamento.jpg';


export default function Historia(){
    return(
        <Container>
            <h6><em>Formas de Pagamento:</em><br/>
                <img src={forma} alt="Formas de Pagamento" />
                <p><strong>&copy;Todos os direitos reservados.</strong></p>
            </h6>
        </Container>
    )
}