import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../css/Dialog.css'
import connect from "react-redux/es/connect/connect";
import SendMessageBar from "./SendMessageBar";
import MessageList from "./MessageList";
import ChatBar from "./ChatBar";
import {getAllMessages, markAsReadAction, postMessage} from "../store/actions/messageActions"

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

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
        this.messagesEnd = React.createRef();
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
        this.props.postMessage(message.message, this.props.userId);
        //this.scrollToBottom();
    };

    scrollToBottom = () => {
        this.messagesEnd.current.scrollIntoView({behavior: "smooth"});
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.userId !== this.props.userId) {
            this.props.getAllMessages(this.props.userId);
            // this.scrollToBottom();
            //this.props.handleDrawerToggle();
        }
        if(this.props.chatMessages){
            this.props.chatMessages.forEach((msg, i, arr) => {
                if(!msg.timestamp_read){
                    this.props.markAsRead(msg.id, this.props.userId);
                }
            })
        }

        //this.props.getAllMessages(this.props.userId);
    };

    render() {
        const {classes} = this.props;
        return this.props.userId ? (
            <div>
                <ChatBar/>
                {
                    this.props.chatMessages && this.props.chatMessages.length > 0 ?
                        <MessageList userInfo={this.props.currentChat.info} myUserId={this.props.userId}
                                     messages={this.props.chatMessages ? this.props.chatMessages : []}/>
                        :
                        <div className={classes.emptyChat}>
                            <Typography variant="h5" style={{color: '#bcbcbc'}}>История сообщений пуста...</Typography>
                            <SendMessageBar sendMsg={this.handleSendMessage}/>
                        </div>
                }
                <div style={{float: "left", clear: "both"}} ref={this.messagesEnd}>
                </div>
                <SendMessageBar handleSendMessage={this.handleSendMessage}/>
            </div>
        ) : (
            <div>
                <div className={classes.emptyChat}>
                    <Typography variant="h5" style={{color: '#bcbcbc'}}>Выберите диалог...</Typography>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        chatMessages: state.messages[ownProps.userId],
        currentChat: state.currentChat
    }
}


function mapDispatchToProps(dispatch) {
    return {
        postMessage: (message, toId) => dispatch(postMessage(message, toId)),
        getAllMessages: (chatId) => dispatch(getAllMessages(chatId)),
        markAsRead:(messageId,chatId) => dispatch(markAsReadAction(messageId, chatId)),
    }
}

const styledWindow = withStyles(styles, {withTheme: true})(ChatWindow);


const ChatWindowsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
(styledWindow);

export default ChatWindowsContainer
