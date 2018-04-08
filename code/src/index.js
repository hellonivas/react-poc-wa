/* Package JSON Import will be here */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
/* Package JSON Import will be here */

/* Project Import will be here */
import Routes from './route';
import Reducers from './reducers'
/* Project Import will be here */

/* Styles Import will be here */
import './assets/styles/styles.css';
/* Styles Import will be here */

const createStoreWithMiddleware = applyMiddleware()(createStore)

const Main = () => (
    <Provider store={createStoreWithMiddleware(Reducers)}>
        <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
            <Routes />
        </MuiThemeProvider>
    </Provider>
);


ReactDOM.render(<Main />, document.getElementById('root'));
