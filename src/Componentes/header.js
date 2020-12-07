import { Navbar, Nav} from 'react-bootstrap';
import {Link, withRouter} from 'react-router-dom';
import '../estilo.css';
import logo from './Logo.png';

function menu(props){
    return(
        <Navbar className="navbar" expand="lg" bg="white" fixed="top">
            <Link to="Bolos"><img className="logo" src={logo} alt="Delicious Cakes"/></Link>
            <Navbar.Toggle aria-controls="item-menu" />
            <Navbar.Collapse id="item-menu">
                <Nav activeKey={props.location.pathname} className="ml-auto mr-3 menu">
                    <Nav.Item>
                        <Nav.Link as={Link} href='Historia' to='Historia'>A Delicious Cakes</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href='Bolos' to='Bolos'>Bolos</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href='Lojas' to='Lojas'>Nossas Lojas</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link as={Link} href='Contato' to='Contato'>Contatos</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

const Menu=withRouter(menu);

export default Menu