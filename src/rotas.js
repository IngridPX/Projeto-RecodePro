import Historia from './paginas/historia';
import Bolos from './paginas/bolos';
import {Switch, Route} from 'react-router-dom';

function Rotas(){
    return(
        <Switch>
            <Route exact path="/historia" component={Historia} />
            <Route exact path="/bolos" component={Bolos} />
        </Switch>
    );
}

export default Rotas;