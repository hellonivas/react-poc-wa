/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import { Card, CardActions, CardHeader, CardText } from 'material-ui/Card';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
} from 'material-ui/Table';
import CircularProgress from 'material-ui/CircularProgress';
/* Package JSON Import will be here */

/* Project Import will be here */
import * as configSettings from '../../config/config';
/* Project Import will be here */

/* Styles Import will be here */
import './apiData.css';
/* Styles Import will be here */

class ApiData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            dataList: []
        }
    }

    componentWillMount() {
        this.setState({loading:true})
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then(response => response.json())
            .then((response, error) => {
                this.setState({
                    dataList: response,
                    loading:false
                });
            });
    }

    render() {

        const { dataList } = this.state;

        return (
            <Fragment>
                {
                    this.state.loading ? <CircularProgress /> : ""
                }
                <div className="roots">
                    {
                        dataList.map(data =>
                            <div>
                                <Card>
                                    <CardHeader
                                        title={data.name}
                                        subtitle={data.email}
                                        actAsExpander={true}
                                        showExpandableButton={true}
                                    />
                                    <CardText expandable={true}>
                                        <Table displayRowCheckbox ={false}>
                                            <TableHeader>
                                                <TableRow>
                                                    <TableHeaderColumn>Address</TableHeaderColumn>
                                                    <TableHeaderColumn>Phone</TableHeaderColumn>
                                                    <TableHeaderColumn>Website</TableHeaderColumn>
                                                    <TableHeaderColumn>Company</TableHeaderColumn>
                                                </TableRow>
                                            </TableHeader>
                                            <TableBody>
                                                <TableRow>
                                                    <TableRowColumn>
                                                        {`${data.address.street} ${data.address.suite}
                                                        ${data.address.city} ${data.address.zipcode}`}
                                                    </TableRowColumn>
                                                    <TableRowColumn>{data.phone}</TableRowColumn>
                                                    <TableRowColumn>{data.website}</TableRowColumn>
                                                    <TableRowColumn>{data.company.name}</TableRowColumn>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </CardText>
                                </Card>
                            </div>
                        )
                    }
                </div>
            </Fragment>
        );
    }
}

export default ApiData;