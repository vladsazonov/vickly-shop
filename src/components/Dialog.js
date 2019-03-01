import React from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import ListItem from "@material-ui/core/ListItem/ListItem";
import withStyles from "@material-ui/core/es/styles/withStyles";
import Badge from "@material-ui/core/Badge/Badge";
import chatsStore from "../store/ChatsStore";
import {observer} from "mobx-react";
import {withRouter} from "react-router-dom";
import ToastService from '../services/toastService'

const styles = theme => ({
    fixWidth: {
        width: '100% !important',
        margin: '0px !important',
        paddingLeft: 2,
        paddingTop: 3,
        paddingBottom: 3,
        borderBottom: '1px solid #ececec',
    },
    avatar: {
        width: 50,
        height: 50,
    },
    listItemPadding: {
        padding: 'unset'
    },
    margin: {
        top: '39px!important',
        right: '17px!important',
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
});

@observer
class Dialog extends React.Component {

    constructor(props) {
        super(props);
        this.chatsStore = chatsStore;
    }

    getRandomColor = (letter) => {
        let col = this.colorMap[letter];
        if (col) return col;
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    colorMap = {
        "Р": "#2ab49b",
        "А": "#d15c17",
        "И": "#9e72cf"

    };

    handleDialogClick = () => {
        this.props.history.push(`/home/chat/${this.props.chatId}`);
        this.chatsStore.currentChatId = this.props.chatId;
        ToastService.makeToast("selected chat:"+this.props.chatId);
    };

    formatDate = (timestamp) => {
        const now = new Date(Date.now());
        let date = new Date(timestamp);
        const today = now.toDateString() == date.toDateString();
        const mins = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
        if (today) {
            return date.getHours() + ":" + mins;
        } else {
            return date.getHours() + ":" + mins + " " + date.getDay() + "/" + date.getMonth() + "/" + (date.getFullYear() - 2000);
        }
    };

    render() {
        const {classes, dialog} = this.props;
        const selected = this.props.chatId === this.chatsStore.currentChatId;
        return (
            <ListItem
                selected={selected}
                onClick={this.handleDialogClick.bind(this)}
                disableGutters={true}

                className={classes.listItemPadding}>
                <Grid container className={`${classes.fixWidth} ${selected ? classes.selected : ""}`} wrap="nowrap"
                      spacing={16}>
                    <Grid item md={16}>
                        <Avatar className={classes.avatar} style={{backgroundColor: `${this.getRandomColor()}`}}>
                            {dialog.first_name[0].toUpperCase() + dialog.last_name[0].toUpperCase()}
                        </Avatar>
                    </Grid>
                    <Grid item xs zeroMinWidth style={{paddingTop: 14}}>
                        <Typography variant="body2"
                                    className={classes.white}
                                    noWrap>{dialog.first_name + " " + dialog.last_name}</Typography>
                        <Typography variant="caption"
                                    className={classes.white}
                                    noWrap>{this.props.lastMsg ? this.props.lastMsg.message : "Нет сообщений"}</Typography>
                    </Grid>
                    <Grid item className={classes.fixPadding} style={{paddingLeft: 1, paddingTop: 15}}>
                        <Typography
                            variant="caption"
                            className={classes.white}>{this.props.lastMsg ? this.formatDate(this.props.lastMsg.timestamp_post.timestamp) : ""}</Typography>
                    </Grid>
                    {
                        this.props.unread ?
                            (
                                <div className={classes.margin}>
                                    <Badge color="primary" badgeContent={this.props.unread} className={classes.margin}>
                                    </Badge>
                                </div>
                            )
                            :
                            (
                                ""
                            )
                    }

                </Grid>
            </ListItem>

        );
    }
}

const styledComponent = withStyles(styles, {withTheme: true})(withRouter(Dialog));

export default styledComponent;
