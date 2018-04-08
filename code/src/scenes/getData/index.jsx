/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
import TabView from '../sharedComponent/tabView/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './getData.css';
/* Styles Import will be here */

class GetAPI extends Component {
    render() {
        return (
            <Fragment>
                <NavBar />
                <TabView/>
            </Fragment>
        );
    }
}

export default GetAPI;