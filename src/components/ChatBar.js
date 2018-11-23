import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SendOutlined from '@material-ui/icons/SendOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Typography from "@material-ui/core/Typography/Typography";
import Avatar from "@material-ui/core/Avatar/Avatar";
import Grid from "@material-ui/core/Grid/Grid";
import ButtonBase from "@material-ui/core/ButtonBase/ButtonBase";
import Search from "@material-ui/icons/Search"
import MoreVert from '@material-ui/icons/MoreVert'
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import PersonOutline from "@material-ui/core/SvgIcon/SvgIcon";
import Menu from "@material-ui/core/Menu/Menu";
import Add from '@material-ui/icons/Add'
import Group from '@material-ui/icons/Group'
const styles = theme => ({ //TODO fix themes
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        height: '-webkit-fill-available',
        marginLeft: '5px!important',
        width: '70%',
    },
    position: {
        position: 'fixed',
        top: 65,
        width: '100%!important',
        backgroundColor: '#f7f7f7',
        display: '-webkit-inline-box',
        borderBottom: '1px solid #ebebeb',
        height: 49,
        boxShadow: '0px -3px 13px 0px rgba(0, 0, 0, 0.2)',
        zIndex: 1,
        margin: '0!important',
        right: 0,
        [theme.breakpoints.up('lg')]: {
            paddingLeft: 320,
        },
        [theme.breakpoints.up('md')]: {
            paddingLeft: 320,
        },
        [theme.breakpoints.up('sm')]: {
            paddingLeft: 320,
        },
    },
});

class ChatBar extends React.Component {
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
    render() {
        const { auth, anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const {classes, theme} = this.props;

        return (
            <Grid className={classes.position} container spacing={16} >
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
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
                                    <IconButton style={{padding: 0}}>
                                        <Search/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{textAlign: 'center', display: '-webkit-inline-box'}}>
                    <Typography variant="h6">Бухгалтерия</Typography>
                    <IconButton  style={{padding: 4, marginLeft: 4, borderRadius: '10%', width: '-webkit-fill-available', height: '-webkit-fill-available',}}>
                        <Group/>
                        <Typography>12</Typography>
                    </IconButton>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{textAlign: 'end', margin: 'auto'}}>
                    <IconButton style={{padding: 0, marginRight:25}}>
                        <Add/>
                    </IconButton>
                    <IconButton
                        style={{padding: 0}}
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