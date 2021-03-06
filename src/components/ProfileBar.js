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
        position: 'fixed',
        backgroundColor: theme.palette.primary.main,
        display: 'inline-flex',
        width: 300,
        alignItems: 'center',
        top: 60,
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

class ProfileBar extends React.Component {

    constructor(props) {
        super(props);
        this.accountStore = accountStore;
    }

    render() {

        const {classes} = this.props;

        return (
            <div className={classes.position}>


                <ProfileIco handleLogout={this.accountStore.unauth.bind(accountStore)}
                            name={this.accountStore.name}/>

                            <div>

                <Typography variant="h6" color="secondary" className={classes.wrap}>{this.accountStore.name}</Typography>
                <Typography variant="button" color="secondary" className={classes.wrap}>1000р</Typography>
                            </div>


                {/*        <InviteIcon />*/}
                <IconButton style={{marginLeft: 'auto'}}>
                    <ExitToApp color="secondary" onClick={this.accountStore.unauth.bind(accountStore)}/>
                </IconButton>
                {/*TODO new line for balance*/}

            </div>
        );
    }
}

export default withStyles(styles)(ProfileBar);