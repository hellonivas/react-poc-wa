/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
import LottiAnimation from '../lottiAnimation/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './home.css';
/* Styles Import will be here */

class Home extends Component {

    render() {
        return (
            <Fragment>
                <LottiAnimation />
            </Fragment>
        );
    }
}

export default Home;