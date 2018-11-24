import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import SendOutlined from "@material-ui/core/SvgIcon/SvgIcon";
import IconButton from "@material-ui/core/IconButton/IconButton";
import Search from "@material-ui/icons/Search"
import AddCommentOutlined from "@material-ui/icons/AddCommentOutlined"

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        backgroundColor: "#fff",
        width: 320,
        zIndex: 1499,
    },
    textField: {
        marginLeft: 15,
        marginRight: 0,
        width: '79%',
        margin: 'auto',
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
                        style={{color: '#fff'}}
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
                    <IconButton style={{width: 48, height: 48}}>
                        <AddCommentOutlined/>
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