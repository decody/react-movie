import React from 'react';
import {
    BrowserRouter,
    Switch,
    Route
} from 'react-router-dom';
import Main from './views/Main';
import MovieInfo from './views/MovieInfo';

const Routes = () => {
    const routeList = [
        { label: 'home', link: '/', component: Main },
        { label: 'info', link: '/info/:movieId', component: MovieInfo }
    ];
    return (
        <BrowserRouter>
            <Switch>
                {routeList.map(route => (
                    <Route key={route.label} exact path={route.link} component={route.component} />
                ))}
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;