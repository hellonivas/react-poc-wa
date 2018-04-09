/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx';
import * as AddDeleteAction from '../../actions/addDelete_action';
/* Project Import will be here */

/* Styles Import will be here */
import './addDelete.css';
/* Styles Import will be here */

const customContentStyle = {
    width: '30%',
    maxWidth: 'none',
};

class AddDelete extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            dataName:'',
            dataDce:'',
            open: false
        }
    }

    handleOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleSave = () => {
        debugger;
        let newData = {
            "Name": this.state.dataName,
            "Details": this.state.dataDce,
            "img": "https://www.material-ui.com/images/ok-128.jpg"
        };

        this.state.data.push(newData);

        fetch("https://api.myjson.com/bins/9v4hf"
            , {
                headers: {
                    'Content-Type': 'application/json'
                },
                method: "PUT",
                body: JSON.stringify(this.state.data)
            }
        )
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({ open: false });
            });
    };

    componentWillMount() {
        fetch("https://api.myjson.com/bins/9v4hf")
            .then((response) => {
                return response.json()
            }).then((json) => {
                this.setState({
                    data: json
                });
                console.log(this.state.data);
            });
    }

    listData = (data) => {
        return data.map((item) => {
            return (
                <ListItem
                    primaryText={item.Name}
                    leftAvatar={<Avatar src={item.img} />}
                    rightIcon={<CommunicationChatBubble />}
                />
            )
        })
    }

    render() {
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="Submit"
                primary={true}
                keyboardFocused={true}
                onClick={this.handleSave}
            />
        ];
        return (
            <Fragment>
                <NavBar />
                <div className="text-center p20">
                    <RaisedButton
                        label="Add New"
                        primary={true}
                        onClick={this.handleOpen}
                    />
                    <Dialog
                        title="Add Data"
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        contentStyle={customContentStyle}
                    >
                        <TextField
                            hintText="Enter Name"
                            floatingLabelText="Name"
                            fullWidth={true}
                            value={this.state.dataName}
                            onChange = {e=>this.setState({dataName:e.target.value})}
                        />
                        <TextField
                            hintText="Enter Details"
                            floatingLabelText="Details"
                            fullWidth={true}
                            value={this.state.dataDce}
                            onChange ={(e) => this.setState({dataDce:e.target.value})}
                        />
                        <TextField
                            disabled={true}
                            hintText="Enter Image Pathx"
                            floatingLabelText="Image"
                            fullWidth={true}
                            defaultValue="https://www.material-ui.com/images/ok-128.jpg"
                        />
                    </Dialog>
                </div>
                <List>
                    {this.listData(this.state.data)}
                </List>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        addDeleteData: state.AddDelete
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AddDeleteAction, dispatch)
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddDelete));