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
const styles = theme => ({ //TODO fix themes
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    position: {
        position: 'fixed',
        top: 57,
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
    render() {
        const {classes, theme} = this.props;
        return (
            <Grid className={classes.position} container spacing={16} >
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Typography>Бухгалтерия</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4} style={{textAlign: 'center'}}>
                    <Typography variant="h6">Бухгалтерия</Typography>
                </Grid>
                <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <IconButton style={{width: 48, height: 48}}>
                        <AttachFile/>
                    </IconButton>
                    <IconButton style={{width: 48, height: 48}}>
                        <AttachFile/>
                    </IconButton>
                    <IconButton style={{width: 48, height: 48}}>
                        <AttachFile/>
                    </IconButton>
                </Grid>
            </Grid>
        )
    }
}


ChatBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(ChatBar);