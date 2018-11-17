import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SendOutlined from '@material-ui/icons/SendOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fafafa',
    },
    iconButton: {

    }
};

class SendMessageBar extends React.Component {
    render() {

        const {classes} = this.props;

        return (
            <div className={classes.position}>
                <div>
                    <TextField
                        id="outlined-full-width"
                        style={{width: '75%', margin: 8}}
                        placeholder="Введите сообщение..."
                        //helperText="Full width!"
                        fullWidth
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton>
                                        <SendOutlined/>
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <IconButton style={{width: 48, height: 48, marginTop: 10}}>
                        <AttachFile/>
                    </IconButton>
                </div>
            </div>
        )
    }
}

SendMessageBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SendMessageBar);