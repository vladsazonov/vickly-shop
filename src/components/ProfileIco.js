import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ExitToApp from '@material-ui/icons/ExitToApp'
import PersonOutline from '@material-ui/icons/PersonOutline'
import Settings from '@material-ui/icons/Settings'


const styles = {
    menuButton: {
        marginLeft: -12,
        marginRight: 5,
    },
};

class ProfileIco extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleLogout = () => {
        // loginService.clearUserInfo();

    };

    render() {
        const { classes } = this.props;
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={classes.root}>
                <Toolbar style={{padding: 0}}>
                    {auth && (
                        <div>
                            <IconButton
                                aria-owns={open ? 'menu-appbar' : undefined}
                                aria-haspopup="true"
                                onClick={this.handleMenu}
                                color="secondary"
                            >
                                <AccountCircle/>
                            </IconButton>
                            <Menu
                                style={{zIndex: 2000}}
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}><PersonOutline/>Профиль</MenuItem>
                                <MenuItem onClick={this.handleClose}><Settings/>Настройки</MenuItem>
                                <MenuItem onClick={this.props.handleLogout}><ExitToApp/>Выйти</MenuItem>
                            </Menu>
                        </div>
                    )}
                </Toolbar>
            </div>
        );
    }
}

ProfileIco.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProfileIco);