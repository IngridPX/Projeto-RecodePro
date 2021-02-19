import Historia from './paginas/historia';
import Lojas from './paginas/lojas';
import Contato from './paginas/contato';
import Bolos from './paginas/bolos';
import Carrinho from './Carrinho';
import {Switch, Route} from 'react-router-dom';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/historia" component={Historia} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/contato" component={Contato} />
            <div style = {{display:'flex'}}>
            <Route exact path="/Bolos" component={Bolos} />
            <Route exact path="/Bolos" component={Carrinho} />
            </div>
            
        </Switch>
    );
}

export default Rotas;