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
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: '79%',
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
            <div style={{
                position: "fixed",
                top: 57,
                left: 0,
                right: 0,
                backgroundColor: "#fff",
                width: 319,
                zIndex: 1499,
            }}>
                <form className={classes.container} noValidate autoComplete="off">

                    <TextField
                        id="standard-search"
                        placeholder="Поиск..."
                        type="search"
                        className={classes.textField}
                        margin="normal"
                        fullWidth
                        style={{margin: 'auto',marginLeft: 19,}}
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
                    <IconButton style={{width: 48, height: 48, marginTop: 13}}>
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