import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import SendOutlined from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Search from "@material-ui/icons/Search"
import AddCommentOutlined from "@material-ui/icons/AddCommentOutlined"
import "../css/dark.css"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: "fixed",
        top: 50,
        left: 0,
        right: 0,
        backgroundColor: '#17212b',
        borderRight: '1px solid #243342',
        [theme.breakpoints.up('xs')]: {
            width: '100%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '33%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
        zIndex: 1499,
    },
    textField: {
        marginLeft: 15,
        marginRight: 0,
        width: '83%',
        [theme.breakpoints.up('sm')]: {
            width: '68%',
        },
        [theme.breakpoints.up('md')]: {
            width: '80%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '83%',
        },
        margin: 'auto',
        backgroundColor: '#1d2a36',
        borderRadius: 8,
        padding: 4
    },
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});

class OutlinedTextFields extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.position}>
                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="standard-search"
                        placeholder="Поиск..."
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton style={{padding: 0}}>
                                        <Search style={{color: "white"}}/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <IconButton style={{width: 48, height: 48}}>
                        <AddCommentOutlined style={{color: "white"}}/>
                    </IconButton>

                </form>
            </div>

        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);