/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
/* Package JSON Import will be here */

/* Project Import will be here */
import CssAnimation from '../../cssAnimation/index.jsx'
import ApiData from '../../apiData/index.jsx'
/* Project Import will be here */

/* Styles Import will be here */
import './tabView.css';
/* Styles Import will be here */

class TabView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 'a',
        };
    }

    handleChange = (value) => {
        this.setState({
            value: value,
        });
    };

    render() {
        return (
            <Fragment>
                <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                    <Tab label="Form JSON File" value="a">
                        <div>
                            <h2 className="headline">Form JSON File</h2>
                            <CssAnimation />
                        </div>
                    </Tab>
                    <Tab label="From API" value="b">
                        <div>
                            <h2 className="headline">From API - (https://jsonplaceholder.typicode.com/users)</h2>
                            <ApiData/>
                        </div>
                    </Tab>
                </Tabs>
            </Fragment>
        );
    }
};

export default TabView;