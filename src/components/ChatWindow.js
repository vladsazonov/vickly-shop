import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../css/Dialog.css'
import SendMessageBar from "./SendMessageBar";
import MessageList from "./MessageList";
import ChatBar from "./ChatBar"
//..import Test from './test.js'
import chatsStore from "../store/ChatsStore";
import accountStore from "../store/AccountStore"
import messagesStore from "../store/MessagesStore"
import {observer} from "mobx-react";


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
    emptyChat: {
        marginTop: 300,
        marginBottom: 300,
        textAlign: 'center',
    },
});

@observer
class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.chatsStore = chatsStore;
        this.messagesStore = messagesStore;
        this.accountStore = accountStore;
        this.messageList = React.createRef();
    }

    equalMessages = (msg1, msg2) => {
        return msg1.id === msg2.id;
    };

    equalMsgArrays = (arr1, arr2) => {
        if (arr1.length !== arr2.length)
            return false;
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i].id !== arr2[i].id)
                return false;
        }
    };

    componentDidMount() {
        console.log("componentDidMount chatWindow");
        console.log("props:" + this.props);

        // if (this.messagesEnd.current) {
        //     this.scrollToBottom();
        // }
    }


    handleSendMessage = (message) => {
        console.log("send message!!!");
        this.messagesStore.postMessage(message.message, this.chatsStore.currentChatId);
        this.scrollToBottom();
    };

    scrollToBottom = () => {
        //this.messagesEnd.current.scrollIntoView({behavior: "smooth"});
        //TODO scroll child
        //this.messageList.current.scrollToEnd();
    };

    //Injected func
    scrollToEnd() {
        this.messagesEnd.current.scrollIntoView({behavior: "smooth"});
    };


    componentWillMount() {
        //this.messagesStore.getAllMessagesByChatId(this.chatsStore.currentChatId);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {


        this.messagesStore.loadMessagesByChatId(this.chatsStore.currentChatId);
        let messages = this.messagesStore.messages.find((elem) => elem.chatId === this.chatsStore.currentChatId);
        if (messages){
            messages.messages.forEach((elem)=>{
                if(!elem.timestamp_delivery){
                    this.messagesStore.deliveryMessage(elem.id,1,'user');

                }
                if(!elem.timestamp_read){
                    this.messagesStore.readMessage(elem.id,1,'user');

                }
            })
        }

        // if(this.props.chatMessages){
        //     let props = this.props;
        //     this.props.chatMessages.forEach((msg, i, arr) => {
        //         if(!msg.timestamp_read){
        //             props.markAsRead(msg.id, this.props.userId);
        //         }
        //     })
        // }

        //this.props.getAllMessages(this.props.userId);
    };


    testUser = {
        "_id": "5c55d1c12cf1d52f70fb15d9",
        "id": 3,
        "first_name": "test_user_invite",
        "last_name": "test_user_invite",
        "group_id": 2,
        "login": "test_user_invite",
        "is_active": true,
        "join_time": 1542552311,
        "last_activity": 0,
        "archive": false,
        "avatar": "",
        "role_id": 0
    };

    render() {
        const {classes} = this.props;
        let messages = this.messagesStore.messages.find((elem) => elem.chatId === this.chatsStore.currentChatId);
        return this.chatsStore.currentChatId ? (
            <div>
                <ChatBar/>
                {
                    messages && messages.messages.length > 0 ?
                        <MessageList userInfo={this.testUser} myUserId={this.props.userId}
                                     messages={messages}
                                     ref={this.messageList}
                        />
                        :
                        <div className={classes.emptyChat}>
                            <Typography variant="h5">История сообщений пуста...</Typography>
                            <SendMessageBar sendMsg={this.handleSendMessage}/>
                        </div>
                }
                <SendMessageBar handleSendMessage={this.handleSendMessage.bind(this)}/>
            </div>
        ) : (
            <div>
                {/*<Test/>*/}
                <div className={classes.emptyChat}>
                    <Typography variant="h5">Выберите диалог...</Typography>
                </div>
            </div>
        );
    }
}

const styledWindow = withStyles(styles, {withTheme: true})(ChatWindow);

export default styledWindow;
