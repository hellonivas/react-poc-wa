/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
/* Package JSON Import will be here */

/* Project Import will be here */
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
                            <p>
                                Tabs are also controllable if you want to programmatically pass them their values.
                                This allows for more functionality in Tabs such as not
                                having any Tab selected or assigning them different values.
                </p>
                        </div>
                    </Tab>
                    <Tab label="From API" value="b">
                        <div>
                            <h2 className="headline">From API</h2>
                            <p>
                                This is another example of a controllable tab. Remember, if you
                                use controllable Tabs, you need to give all of your tabs values or else
                                you wont be able to select them.
                </p>
                        </div>
                    </Tab>
                </Tabs>
            </Fragment>
        );
    }
};

export default TabView;