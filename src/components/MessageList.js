import React from 'react';
import Message from './Message';
import accountStore from '../store/AccountStore'
import '../css/MessageList.css'

const styles = theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'

    },
    listMessages: {
        marginLeft: 40,
        marginBottom: 205,
        marginTop: 23,

    },
    chip: {
        margin: theme.spacing.unit,
    },
});

class MessageList extends React.Component {
    constructor(props) {
        super(props);
        //console.log("messages:"+props.messages)
        this.messagesEnd = React.createRef();
        this.accountStore = accountStore;
    }

    componentDidUpdate() {
        // There is a new message in the state, scroll to bottom of list
        // const objDiv = document.getElementById('messageList');
        // objDiv.scrollTop = objDiv.scrollHeight;
        this.scrollToEnd();
    }

    scrollToEnd(){
        this.messagesEnd.current.scrollIntoView({behavior: "smooth"});
    };

    render() {
        const {classes} = this.props;
        // Loop through all the messages in the state and create a Message component
        const {myUserId} = this.accountStore.userId;
        console.log("myUserId:"+myUserId);
        const messages = this.props.messages.messages.map((message, i) => {
            let fromMe = message.from == myUserId;
            return (
                <Message
                    key={i}
                    userInfo={this.props.userInfo}
                    username={"Placeholder"}
                    message={message.message}
                    messageInfo={message}
                    fromMe={fromMe} />
            );
        });

        return (
            <div id='messageList'>
                { messages }
                <div style={{float: "none", clear: "both", }} ref={this.messagesEnd}/>
            </div>
        );
    }
}

//export default withStyles(styles)(MessageList);

export default MessageList