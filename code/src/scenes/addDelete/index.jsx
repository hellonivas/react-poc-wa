/* Package JSON Import will be here */
import React, { Component,Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './addDelete.css';
/* Styles Import will be here */

class AddDelete extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <h1>AddDelete</h1>
            </Fragment>
        );
    }
}

export default AddDelete;