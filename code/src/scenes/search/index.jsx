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
        this.state = {
            artists: ArtistsData.artists,
            filtered: ArtistsData.artists,
            keyword: ''
        }
    }
    componentWillMount() {
        this.props.artistsList(ArtistsData);
    }

    renderList = ({ filtered }) => {
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

    searchArtist = (e) => {
        console.log(e.target.value);
        const keyword = e.target.value;
        this.setState({ keyword });
        if (keyword !== '') {
            const list = this.state.artists.filter((item) => {
                return item.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1
            });
            this.setState({
                filtered: list,
                keyword
            });

        }
        else {
            this.setState({
                filtered: this.state.artists,
                keyword
            });
        }
    }

    render() {
        const { artists, filtered, keyword } = this.state
        return (
            <Fragment>
                <NavBar />
                <h4 className="text-center">Getting Data from JSON Using Redux</h4>
                <div className="text-center">
                    <TextField
                        value={keyword}
                        hintText="Enter text to search"
                        floatingLabelText="Search"
                        onChange={e => this.searchArtist(e)}
                    />
                </div>
                <List>
                    {this.renderList(this.state)}
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

export default connect(mapStateToProps, actions)(Search);