/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import List from 'material-ui/List/List';
import ListItem from 'material-ui/List/ListItem';
import FileFolder from 'material-ui/svg-icons/file/folder';
import Avatar from 'material-ui/Avatar';
import TextField from 'material-ui/TextField';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx';
import * as actions from '../../actions/artists_actions'
import * as ArtistsData from '../../../database/artist.json'
/* Project Import will be here */

/* Styles Import will be here */
import './search.css';
/* Styles Import will be here */

class Search extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        this.props.moviesList(ArtistsData);
    }

    renderList = (movies) => {
        debugger;
        if (movies) {
            return movies.artists.map((movie, i) => {
                return (
                    <Link to={`/Details/${i}`} className="no-underline">
                        <ListItem
                            key={i}
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
        return (
            <Fragment>
                <NavBar />
                <h4 className="text-center">Getting Data from JSON Using Redux</h4>
                <div className="text-center">
                    <TextField
                        hintText="Enter text to search"
                        floatingLabelText="Search"
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
    console.log(state);
    return {
        Artists: state.Artists
    }
}

export default connect(mapStateToProps, actions)(Search);