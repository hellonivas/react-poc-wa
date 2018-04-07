/* Package JSON Import will be here */
import React from 'react';
import ReactDOM from 'react-dom';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
/* Package JSON Import will be here */

/* Project Import will be here */
import Routes from './route';
/* Project Import will be here */

/* Styles Import will be here */
import './assets/styles/styles.css';
/* Styles Import will be here */


const Main = () => (
    <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
        <Routes />
    </MuiThemeProvider>
);


ReactDOM.render(<Main />, document.getElementById('root'));
