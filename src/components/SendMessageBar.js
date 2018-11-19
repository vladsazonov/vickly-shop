import React from 'react';
import TextField from "@material-ui/core/TextField/TextField";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import SendOutlined from '@material-ui/icons/SendOutlined';
import AttachFile from '@material-ui/icons/AttachFile';
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import IconButton from "@material-ui/core/IconButton/IconButton";

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: 'sticky',
        bottom: 0,
        width: '100%',
        backgroundColor: '#fafafa',
        display: 'inline-flex',
        borderTop: '1px solid #ebebeb',
    },
    iconButton: {}
});

class SendMessageBar extends React.Component {
    handleSendButton = () => {
        this.props.sendMsg({
            message: this.state.messageText,
            fromMe: true
        });
    };

    handleOnTextChange = (e) => {
        this.setState({
            messageText: e.target.value
        });
    };

    render() {

        const {classes, theme} = this.props;

        return (
            <div className={classes.position}>
                <TextField
                    id="outlined"
                    onChange={this.handleOnTextChange}
                    style={{width: '95%', margin: 8}}
                    placeholder="Введите сообщение..."
                    //helperText="Full width!"
                    margin="normal"
                    variant="outlined"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={this.handleSendButton}>
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
        )
    }
}

SendMessageBar.propTypes = {
    classes: PropTypes.object.isRequired,
    // Injected by the documentation to work in an iframe.
    // You won't need it on your project.
    container: PropTypes.object,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(SendMessageBar);