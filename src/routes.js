import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import * as page from './pages'

const Routes = () => {
    return(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={page.HomePage}/>
            <Route exact path="/items" component={page.ItemPage}/>
        </Switch>
    </BrowserRouter>
    )
};

export default Routes;
