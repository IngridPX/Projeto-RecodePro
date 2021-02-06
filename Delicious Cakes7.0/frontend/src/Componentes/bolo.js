import '../estilo.css';
import { Container } from 'react-bootstrap';

export default function Bolo(props){

    function show_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "initial";
    }

    function hide_info(event){
        const target = event.currentTarget;
        const elemento = target.getElementsByTagName("figcaption")[0];
        elemento.style.visibility = "hidden";
    }

    return(
        <Container>
            <h2 className="titulo"> Bolos </h2>
            <figure className={props.categoria + "produto col-lg-3 col-md-4 col-sm-6 col-xs-12 mr-auto"} onMouseOver={show_info} onMouseOut={hide_info} >
                <img className="logo" src={require(`../paginas/Imagens/${props.nome_imagem}`).default} alt="Imagem de Produtos"/>
                <figcaption>
                    <p className="nome-prod">
                        {props.categoria}
                    </p>
                    <p className="promocao">
                        R${props.preco}
                    </p>
                    <p className="preco-prod">
                        R${props.preco_desconto}
                    </p>
                    <button class ="btnComprar" id ="btnComprar"><a href='pedidos.php'>Encomendar</a></button>
                </figcaption>
            </figure>
        </Container>
    )
}