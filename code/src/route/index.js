/* Package JSON Import will be here */
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
/* Package JSON Import will be here */

/* Project Import will be here */
import {
    Home,
    GetData,
    Search,
    AddDelete,
    LottiAnimation,
    CssAnimation
} from '../scenes';
import { NotFound } from '../scenes/sharedComponent';
/* Project Import will be here */


const Routers = () => {
    return (
        <Router>
            <Switch>
                {/*------------------------- Common Routing Pages -------------------------*/}
                <Route exact path="/" component={Home} />
                <Route path="/GetData" component={GetData} />
                <Route path="/Search" component={Search} />
                <Route path="/AddDelete" component={AddDelete} />
                <Route path="/LottiAnimation" component={LottiAnimation} />
                <Route path="/CssAnimation" component={CssAnimation} />
                {/*------------------------- Common Routing Pages -------------------------*/}
                <Route path="*" component={NotFound} />
            </Switch>
        </Router>
    );
};

export default Routers;

Routers.displayName = 'Router';