import Historia from './paginas/historia';
import Bolos from './Componentes/bolo';
import Lojas from './paginas/lojas';
import Contato from './paginas/contato';
import {Switch, Route} from 'react-router-dom';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/historia" component={Historia} />
            <Route exact path="/bolo" component={Bolos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/contato" component={Contato} />
        </Switch>
    );
}

export default Rotas;