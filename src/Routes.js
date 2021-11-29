import React from 'react';
import {
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
        <Switch>
            {routeList.map(route => (
                <Route key={route.label} exact path={route.link} component={route.component} />
            ))}
        </Switch>
    );
};

export default Routes;