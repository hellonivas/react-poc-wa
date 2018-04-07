/* Package JSON Import will be here */
import React, { Component,Fragment } from 'react';
/* Package JSON Import will be here */

/* Project Import will be here */
import  NavBar  from '../sharedComponent/navBar/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './search.css';
/* Styles Import will be here */

class Search extends Component {
    render() {
        return (
            <Fragment>
                <NavBar/>
                <h1>Search</h1>
            </Fragment>
        );
    }
}

export default Search;