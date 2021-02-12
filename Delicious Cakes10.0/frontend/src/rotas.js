import React, { lazy, Suspense } from 'react';
import {Switch, Route} from 'react-router-dom';
import './estilo.css';


const Historia = lazy( () => import('./paginas/historia'));
const Bolos = lazy( () => import('./Componentes/bolo'));
const Lojas = lazy( () => import('./paginas/lojas'));
const Contato = lazy( () => import('./paginas/contato'));

function Rotas(){
    return(
        <Suspense fallback={
              <h3 className="carregamento">Carregando...</h3>
          }>
        <Switch>
            <Route exact path="/historia" component={Historia} />
            <Route exact path="/bolo" component={Bolos} />
            <Route exact path="/lojas" component={Lojas} />
            <Route exact path="/contato" component={Contato} />
        </Switch>
        </Suspense>
    );
}

export default Rotas;