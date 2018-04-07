/* Package JSON Import will be here */
import React, { Component, Fragment } from 'react';
import { Link } from "react-router-dom";
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import NotificationsIcon from 'material-ui/svg-icons/social/notifications';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye';
import PersonAdd from 'material-ui/svg-icons/social/person-add';
import ContentLink from 'material-ui/svg-icons/content/link';
import Divider from 'material-ui/Divider';
import Delete from 'material-ui/svg-icons/action/delete';
import ContentCopy from 'material-ui/svg-icons/content/content-copy';
import Download from 'material-ui/svg-icons/file/file-download';
import FontIcon from 'material-ui/FontIcon';
/* Package JSON Import will be here */

/* Styles Import will be here */
import './navBar.css';
/* Styles Import will be here */

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleToggle = () => this.setState({ open: !this.state.open });

    handleClose = () => this.setState({ open: false });

    render() {
        return (
            <Fragment>
                <AppBar
                    title={
                        <Link to={'/'} className="logo">
                            React POC
                        </Link>
                    }
                    onLeftIconButtonClick={this.handleToggle}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><MoreVertIcon /></IconButton>
                            }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                        >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    }
                />
                <Drawer
                    docked={false}
                    open={this.state.open}
                    onRequestChange={(open) => this.setState({ open })}
                >
                    <Menu>
                        <Link to={'/GetAPI'} className="no-underline">
                            <MenuItem primaryText="Get Data from API" leftIcon={<RemoveRedEye />} />
                        </Link>
                        <Link to={'/Search'} className="no-underline">
                            <MenuItem primaryText="Search" leftIcon={<PersonAdd />} />
                        </Link>
                        <Link to={'/AddDelete'} className="no-underline">
                            <MenuItem primaryText="Add Delete" leftIcon={<ContentLink />} />
                        </Link>
                        <Divider />
                        <Link to={'/LottiAnimation'} className="no-underline">
                            <MenuItem primaryText="Lotti Animation" leftIcon={<ContentCopy />} />
                        </Link>
                        <Link to={'/CssAnimation'} className="no-underline">
                            <MenuItem primaryText="CSS Animation" leftIcon={<Download />} />
                        </Link>
                    </Menu>
                </Drawer>
            </Fragment>
        );
    }
}

export default NavBar;