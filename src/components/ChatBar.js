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
const styles = {
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: 'sticky',
        top: 57,
        width: '100%',
        backgroundColor: '#f7f7f7',
        display: '-webkit-inline-box',
        borderBottom: '1px solid #ebebeb',
        height: 59,
        boxShadow: '0px -3px 13px 0px rgba(0, 0, 0, 0.2)',
    },
};
class SendMessageBar extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.position}>
            </div>
        )
    }
}
SendMessageBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(SendMessageBar);