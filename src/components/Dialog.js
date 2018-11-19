import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import ListItem from "@material-ui/core/ListItem/ListItem";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/es/styles/withStyles";
import {connect} from "react-redux";
import {tryLogin} from "../store/actions/loginActions";
import {setCurrentChat} from "../store/actions/chatActions";

const message = 'Опять на работу сука блять';
const image = 'https://pp.userapi.com/c604521/v604521198/21993/7DxyyX7M-YY.jpg';
const name = 'Константин Константинович Константинопольский';
const date = '22/06/18';

const styles = {
    fixWidth: {
        width: '100% !important',
        margin: '0px !important',
        paddingLeft: 5,
        paddingTop: 8,
        paddingBottom: 8,
        borderBottom: '1px solid #ebebeb',
    },
    fixPadding: {
        marginRight: 6,
        marginTop: 10,
        padding: 0,
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 9,
    },
    contentPadding: {
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 9,
    },
};

class Dialog extends React.Component {

    handleDialogClick = () => {
        this.props.setCurrentChat(this.props.dialog.id);
    };

    render() {
        const {classes, dialog} = this.props;
        return (
            <ListItem onClick={this.handleDialogClick} disableGutters={true} button style={{padding: 'unset'}}>
                <Grid container className={classes.fixWidth} wrap="nowrap" spacing={16}>
                    <Grid item md={16} style={{paddingRight: 1}}>
                        <Avatar style={{width: 50, height: 50}}>
                            {dialog.first_name[0].toUpperCase()}
                        </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{paddingTop: 14}}>
                        <Typography variant="body2" noWrap>{dialog.first_name+" "+dialog.last_name}</Typography>
                        <Typography variant="caption" noWrap>{false ? "..." : message}</Typography>
                    </Grid>
                    <Grid item className={classes.fixPadding} style={{paddingLeft: 1, paddingTop: 15}}>
                        <Typography variant="caption">{false ? "..." : date}</Typography>
                    </Grid>
                </Grid>
            </ListItem>

        );
    }
}


function mapStateToProps(state) {
    return {
        currentChat: state.currentChat
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentChat: (chatId) => {
        dispatch(setCurrentChat(chatId));
    }
});

const styledComponent = withStyles(styles, {withTheme: true})(Dialog);

export default connect(mapStateToProps,mapDispatchToProps)(styledComponent);
