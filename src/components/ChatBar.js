import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import Search from "@material-ui/icons/Search"
import MoreVert from '@material-ui/icons/MoreVert'
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import Add from '@material-ui/icons/Add'
import Group from '@material-ui/icons/Group'
import FavoriteOutlined from '@material-ui/icons/FavoriteBorderOutlined'
import accountStore from "../store/AccountStore";

const styles = theme => ({ //TODO fix themes
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        height: '-webkit-fill-available',
        marginLeft: '5px!important',
        width: '-webkit-fill-available',
    },
    wid: {
        [theme.breakpoints.up('xs')]: {
            width: '0',
        },
    },
    position: {
        position: 'fixed',
        top: 50,
        display: '-webkit-inline-box',
        height: 50,
        zIndex: 1,
        margin: '0!important',
        right: 0,
        [theme.breakpoints.down('xs')]: {
            left: 0,
            width: 'auto!important',
        },
        [theme.breakpoints.up('sm')]: {
            left: '35%',
            width: 'auto!important',
        },
        [theme.breakpoints.up('md')]: {
            left: '33%',
            width: 'auto!important',
        },
        [theme.breakpoints.up('lg')]: {
            left: '30%',
            width: 'auto!important',
        },
    },
});

class ChatBar extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
    };

    constructor(props) {
        super(props);
        this.accountStore = accountStore;
    }

    handleChange = event => {
        this.setState({ auth: event.target.checked });
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };
    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const {classes, theme} = this.props;

        return (
            <Grid className={classes.position} container spacing={16}>
                <Grid item xs={3} sm={2} md={2} lg={4} xl={4}>
                    <TextField
                        id="outlined-search"
                        placeholder="Поиск по сообщениям..."
                        type="search"
                        className={classes.textField}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <Search/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={3} sm={3} md={4} lg={4} xl={4} style={{textAlign: 'center'}} className={classes.wid}>
                    <div>
                        <Typography variant="h6">{this.accountStore.fullName}</Typography>
                        <IconButton>
                            <Group/>
                            {/*<Typography style={{color: 'white'}}>12</Typography>*/}
                        </IconButton>
                    </div>
                </Grid>
                <Grid item xs={6} sm={7} md={4} lg={4} xl={4}>
                    <IconButton>
                        <Add/>
                    </IconButton>
                    <IconButton>
                        <FavoriteOutlined/>
                    </IconButton>
                    <IconButton
                        aria-owns={open ? 'menu-appbar' : undefined}
                        aria-haspopup="true"
                        onClick={this.handleMenu}
                        color="inherit">
                        <MoreVert/>
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
                        <MenuItem onClick={this.handleClose}>Информация о чате</MenuItem>
                        <MenuItem onClick={this.handleClose}>Вложения</MenuItem>
                        <MenuItem onClick={this.handleClose}>Заглушить уведомления</MenuItem>
                        <MenuItem onClick={this.handleClose}>Выйти</MenuItem>
                    </Menu>
                </Grid>
            </Grid>
        )
    }
}


ChatBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ChatBar);