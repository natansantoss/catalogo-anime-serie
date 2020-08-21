import React from 'react';
import {  Router, Switch, Route, Redirect  } from 'react-router-dom';
import {  history  } from './history'

import Register from './pages/Register'
import Authentication from './pages/Authentication'
import Home from './pages/Home'
import Anime from './pages/Anime'
import Serie from './pages/Serie'

const PrivateRoute = ({  component: Component, ...rest  }) => {

    const tokenValid = localStorage.getItem('token')

    return <Route {...rest} render={ props => (

        tokenValid !== null ? <Component {...props}/> : <Redirect to="/" />

    )}/>
}

function Routes(){
    return(

        <Router history={history}>
            <Switch>
                <Route path="/register" component={Register} />
                <Route exact path="/" component={Authentication} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute path="/anime" component={Anime} />
                <PrivateRoute path="/serie" component={Serie} />
            </Switch>
        </Router>
    )
}

export default Routes;