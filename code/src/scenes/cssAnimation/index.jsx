/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
/* Package JSON Import will be here */

/* Project Import will be here */
import * as configSettings from '../../config/config';
import * as Data from '../../../database/cssAnimation.json';
/* Project Import will be here */

/* Styles Import will be here */
import './cssAnimation.css';
/* Styles Import will be here */

class CssAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataList: Data.tilesData
        }
    }

    render() {

        const { dataList } = this.state;

        return (
            <Fragment>
                <div className="root">
                    <GridList
                        cellHeight={180}
                        className="gridList"
                        cols={4}
                    >
                        {dataList.map((tile) => (
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