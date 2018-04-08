/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
/* Package JSON Import will be here */

/* Project Import will be here */
import NavBar from '../sharedComponent/navBar/index.jsx'
import * as Data from '../../../database/cssAnimation.json'
/* Project Import will be here */

/* Styles Import will be here */
import './cssAnimation.css';
/* Styles Import will be here */

class CssAnimation extends Component {
    constructor(props) {
        super(props);
        //console.log(Data.tilesData );
    }
    render() {

        const { tilesData } = Data;

        return (
            <Fragment>
                <NavBar />
                <div className="root">
                    <GridList
                        cellHeight={180}
                        className="gridList"
                        cols={4}
                    >
                        <Subheader>Data are comming form cssAnimation.JSON File</Subheader>
                        {tilesData.map((tile) => (
                            <GridTile
                                key={tile.img}
                                title={tile.title}
                                subtitle={<span>by <b>{tile.author}</b></span>}
                                actionIcon={<IconButton><StarBorder color="white" /></IconButton>}
                            >
                                <img src={tile.img} />
                            </GridTile>
                        ))}
                    </GridList>
                </div>
            </Fragment>
        );
    }
}

export default CssAnimation;