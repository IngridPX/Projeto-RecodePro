import '../estilo.css';
import { Container } from 'react-bootstrap';
import cafe from './Imagens/Bolocomcafé.png';


export default function Historia(){
    return(
        <Container>
            <h2 className="titulo"> Nossa História </h2>
            <div className="imagem">
                <img className="logo" src={cafe} alt="Bolo com café"/>
            </div>
        <h3>"O melhor do seu dia"</h3>
        <p> A Delicious Cakes surgiu, após um período de crise, na qual uma família que amava fazer bolos para o café da tarde, enxergou um meio de fazer o que ama, e ainda ter uma renda para se sustentar. 
            Após muito foco e dedicação, a pequena empresa que contava com um imóvel de 48m em São Paulo, hoje conta com franquias em 3 cidades do Brasil.
        </p>
        <h4>MISSÃO</h4>
        <p>  Garantir a satisfação dos nossos clientes com produtos de qualidade, para que eles possam compartilhar os seus melhores momentos com seus familiares e amigos.</p>
        <h4>VISÃO</h4>
        <p>  Ser referência mundial nos mais variados tipos de bolos em um período de 10 anos, destacando-se pela qualidade, comprometimento e originalidade.</p>
        <h4>VALORES</h4>
        <p>
            <ol className="conteudo">
                <li>Família e Amigos</li>
                <li>Dedicação</li>
                <li>Comprometimento</li>
                <li>Humildade</li>
            </ol>
        </p>
        </Container>
    )
}