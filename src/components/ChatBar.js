import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import withStyles from "@material-ui/core/es/styles/withStyles";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import div from "@material-ui/core/Grid/Grid";
import Search from "@material-ui/icons/Search"
import MoreVert from '@material-ui/icons/MoreVert'
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Menu from "@material-ui/core/Menu/Menu";
import Group from '@material-ui/icons/Group'
import accountStore from "../store/AccountStore";

const styles = theme => ({
    position: {
        position: 'fixed',
        top: 55,
        right: 0,
        display: 'inline-flex',
        justifyContent: 'space-between',
        height: 50,
        zIndex: 1,
        borderBottom: '1px solid #e2e2e2',
        backgroundColor: theme.palette.primary.main,
        [theme.breakpoints.up('sm')]: {
            left: '35%',
        },
        [theme.breakpoints.up('md')]: {
            left: '30%',
        },
        [theme.breakpoints.up('lg')]: {
            left: '30%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%',
        },
    },
    namePosition: {
        display: 'inline-flex',
        alignItems: 'center',
        maxWidth: '40%'
    },
    searchField: {
        height: 40,
        margin: 5,
        marginRight: 0,
        [theme.breakpoints.down('xs')]: {
            maxWidth: '90%',
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
        this.setState({auth: event.target.checked});
    };

    handleMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    handleClose = () => {
        this.setState({anchorEl: null});
    };

    render() {
        const {auth, anchorEl} = this.state;
        const open = Boolean(anchorEl);
        const {classes, theme} = this.props;

        return (
            <div className={classes.position}>

                <div>
                    <TextField
                        id="outlined-search"
                        placeholder="Поиск по сообщениям..."
                        type="search"
                        className={classes.searchField}
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
                </div>

                <div className={classes.namePosition}>
                    <Typography variant="h6" noWrap>{this.accountStore.fullName}</Typography>
                    <IconButton color="secondary">
                        <Group/>
                    </IconButton>
                </div>

                <div>
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
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(ChatBar);