/* Package JSON Import will be here */
import React, { Component,Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './cssAnimation.css';
/* Styles Import will be here */

class CssAnimation extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <h1>CssAnimation</h1>
            </Fragment>
        );
    }
}

export default CssAnimation;