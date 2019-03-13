import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import {observer} from "mobx-react";
import {Route} from "react-router-dom";
import ChatWindow from "./Home";
import chatsStore from "../store/ChatsStore";
import ChatWindowEmpty from "./ChatWindowEmpty";


const styles = theme => ({
    emptyChat: {
        top: 40,
        bottom: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
            left: 0,
        },
        left: '30%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {}
});

@observer
class WindowPanel extends React.Component {
    constructor(props) {
        super(props);
        this.chatsStore = chatsStore;
    }


    render() {
        const {classes} = this.props;
        let isChatDefined = this.chatsStore.userChats && !!this.chatsStore.userChats.with_group.flatMap((elem)=>elem.users).find((elem) => elem.user.id === this.chatsStore.currentChatId);
        return isChatDefined ? (
            <Route path="/home/chat/:chat_id"
                   render={(routeProps) => <ChatWindow {...routeProps}
                                                       handleDrawerToggle={this.handleDrawerToggle}/>}/>
        ) : (
            <Route path="/home/chat/"
                   render={(routeProps) => <ChatWindowEmpty {...routeProps}/>}/>

        );
    }
}

const styledWindow = withStyles(styles, {withTheme: true})(WindowPanel);

export default styledWindow;
