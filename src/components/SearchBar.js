import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Search from "@material-ui/icons/Search"
import AddCommentOutlined from "@material-ui/icons/AddCommentOutlined"

const styles = theme => ({
    position: {
        position: "fixed",
        backgroundColor: theme.palette.primary.main,
        height: 55,
        borderRight: '1px solid #e2e2e2',
        borderBottom: '1px solid #e2e2e2',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginTop: 55
        },
        [theme.breakpoints.up('sm')]: {
            width: '35%',
        },
        [theme.breakpoints.up('md')]: {
            width: '30%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '30%',
        },
        zIndex: 1499,
    },
    textField: {
        width: 'calc(100% - 54px)',
        margin: 6,
        marginRight: 0,
        height: 42,
        backgroundColor: '#ffffff',
        borderRadius: 4,
    },
    button: {
        marginTop: 5,
        color: '#fff'

    },
});

class OutlinedTextFields extends React.Component {

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.position}>
                    <TextField
                        id="standard-search"
                        placeholder="Поиск..."
                        type="search"
                        className={classes.textField}
                        variant='outlined'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="start">
                                    <IconButton>
                                        <Search/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                <IconButton className={classes.button}>
                    <AddCommentOutlined/>
                </IconButton>
            </div>

        );
    }
}

OutlinedTextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);