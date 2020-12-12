import './estilo.css';
import Menu from './Componentes/header';
import {BrowserRouter} from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Rotas from './rotas';
import Footer from './Componentes/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Menu />
        </header>
        <main>
          <Container fluid>
            <Rotas />
          </Container>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
