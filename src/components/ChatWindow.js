import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../css/Dialog.css'
import connect from "react-redux/es/connect/connect";
import SendMessageBar from "./SendMessageBar";
import MessageList from "./MessageList";
import ChatBar from "./ChatBar";

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
});

class ChatWindow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log("props:" + this.props);
        this.setState({
            messages: [
                {
                    username: "Вася Синичкин",
                    message: "Ты хуй моржовый, рот твой ебал"
                },
                {
                    username: "Вася Синичкин",
                    message: "Прости, хуевое настроение было"
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Вася Синичкин",
                    message: "Ты хуй моржовый, рот твой ебал"
                },
                {
                    username: "Вася Синичкин",
                    message: "Прости, хуевое настроение было"
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Я",
                    message: "Я сам виноват",
                    fromMe:true
                },
                {
                    username: "Вася Синичкин",
                    message: "Ты хуй моржовый, рот твой ебал"
                },
                {
                    username: "Вася Синичкин",
                    message: "Прости, хуевое настроение было"
                }
            ]
        });
    }


    handleSendMessage = (message) => {
        console.log("send message!!!");
        this.setState((state) => {
            state.messages.push(message);
        })
    };

    render() {
        const {classes} = this.props;
        return this.props.userId ? (
            <div>
                <ChatBar/>
                {this.props.userId === 4 ? <MessageList messages={this.state.messages}/> : "No message yet..."}

                <SendMessageBar sendMsg={this.handleSendMessage.bind(this)}/>
            </div>
        ) : (
            <div>
                <Typography paragraph>
                    Select chat first!
                </Typography>
                <SendMessageBar sendMsg={this.handleSendMessage}/>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {}
}


function mapDispatchToProps(dispatch) {
    return {}
}

const styledWindow = withStyles(styles, {withTheme: true})(ChatWindow);


const ChatWindowsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
(styledWindow);

export default ChatWindowsContainer
