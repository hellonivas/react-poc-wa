/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import  NavBar  from '../sharedComponent/navBar/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './home.css';
/* Styles Import will be here */

class Home extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <h1>Home</h1>
            </Fragment>
        );
    }
}

export default Home;