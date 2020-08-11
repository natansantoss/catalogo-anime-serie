import React from 'react';
import {  BrowserRouter, Switch, Route} from 'react-router-dom';

import Home from './pages/Home'
import Anime from './pages/Anime'
import Serie from './pages/Serie'

function Routes(){
    return(

        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/anime" component={Anime} />
                <Route path="/serie" component={Serie} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;