/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx';
import * as actions from '../../actions/artists_actions'
/* Project Import will be here */

/* Styles Import will be here */
import './search.css';
/* Styles Import will be here */

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            keyword: ''
        }
    }

    componentWillMount() {
        this.props.artistsList();
    }

    renderList = (filtered) => {
        if (filtered) {
            return filtered.map((movie, i) => {
                return (
                    <Link key={i} to={`/Details/${i}`} className="no-underline">
                        <ListItem
                            disabled={true}
                            leftAvatar={
                                <Avatar icon={<FileFolder />} />
                            }
                        >
                            {movie.name}
                        </ListItem>
                    </Link>
                )
            })
        }
    }

    render() {
        const { keyword } = this.state
        return (
            <Fragment>
                <NavBar />
                <h4 className="text-center">Getting Data from JSON Using Redux</h4>
                <div className="text-center">
                    <TextField
                        value={keyword}
                        hintText="Enter text to search"
                        floatingLabelText="Search"
                        onChange={e => {
                            this.setState({ keyword: e.target.value })
                            this.props.search(e.target.value)
                        }}
                    />
                </div>
                <List>
                    {this.renderList(this.props.Artists)}
                </List>
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        Artists: state.Artists
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search));