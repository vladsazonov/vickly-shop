import React from 'react';
import {Badge, Hidden, IconButton, withStyles} from "@material-ui/core";
import accountStore from "../store/AccountStore";
import ProfileIco from "./ProfileIco";
import chatsStore from "../store/LotsStore";
import Typography from "@material-ui/core/es/Typography/Typography";
import messagesStore from "../store/MessagesStore";
import InviteIcon from "./InviteIcon";
import ExitToApp from '@material-ui/icons/ExitToApp'


const styles = theme => ({
    position: {
        height: 55,

        //  backgroundColor: theme.palette.primary.main,
        display: 'inline-flex',
        width: 300,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    userDisplay: {},
    bage: {
        color: '#20ff98',

    },
    marginInvite: {
        marginLeft: 'auto',
    },
    wrap: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
    },
    barDisp: {
        display: 'inline-flex',
    },
    butt: {
        marginLeft: 'auto',
    },
});

class ProfileBarApp extends React.Component {

    constructor(props) {
        super(props);
        this.accountStore = accountStore;
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.position}>


                <div style={{display: 'flex', justifyContent: 'flex-end',     textAlign: 'right'}}>
<div>
    <div><Typography variant="h5" color="primary"
                     className={classes.wrap}>{this.accountStore.name}</Typography></div>
    <div><Typography variant="button" color="primary" className={classes.wrap}>{this.accountStore.balance} ₽</Typography></div>
</div>


                </div>

                <ProfileIco handleLogout={this.accountStore.unauth.bind(accountStore)}
                            name={this.accountStore.name}/>
                {/*        <InviteIcon />*/}

                {/*TODO new line for balance*/}

            </div>
        );
    }
}

export default withStyles(styles)(ProfileBarApp);