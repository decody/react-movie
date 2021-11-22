import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Home from './views/Home';
import MovieInfo from './views/MovieInfo';

const Routes = () => {
    return (
        <BrowserRouter basename="/">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/list" component={Home} />
                <Route exact path="/info" component={MovieInfo} />
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;