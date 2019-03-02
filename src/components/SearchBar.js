import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Search from "@material-ui/icons/Search"
import AddCommentOutlined from "@material-ui/icons/AddCommentOutlined"

const styles = theme => ({
    position: {
        position: "fixed",
        backgroundColor: theme.palette.primary.light,
        height: 55,
        top: 40,
        // borderRight: '1px solid #e2e2e2',
        // borderBottom: '1px solid #e2e2e2',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            position: "sticky",
        },
            width: '30%',
        zIndex: 1499,
    },
    textField: {
        width: 'calc(100% - 56px)',
        margin: 8,
        marginRight: 0,
        height: 38,
        backgroundColor: '#ffffff',
        borderRadius: 4,
    },
    button: {
        marginTop: 5,
        color: theme.palette.secondary.dark
    },
    searchIco: {
        color: theme.palette.secondary.light
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
                                <InputAdornment position="end">
                                    <IconButton className={classes.searchIco}>
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

export default withStyles(styles)(OutlinedTextFields);