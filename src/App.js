import React, {Component} from 'react';
import './App.css';
import {Grid, Paper} from '@material-ui/core';
import Login from "./components/Login";
import {connect} from "react-redux";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import Home from "./components/Home";
import {setLoginStatus} from "./store/actions/loginActions";
import {fetchChats} from "./store/actions/mainActions";
import loginService from "./services/loginService"
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import WebsocketService from "./services/websocketService";
import {addLastMessageToUser, addMessage} from "./store/actions/messageActions";

class App extends Component {
    websocketService;

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }


    setLoading = () => {
        this.setState({
            loading: true
        })
    };

    addMessage(message) {
        this.props.updateLastMessageInUser(message);
        this.props.addMessage(message);
    }


    componentWillMount() {
        const creds = loginService.getCreds();
        if (creds.token) {
            this.props.setUserInfo({
                last_name: creds.last_name,
                first_name: creds.first_name,
                token: creds.token,
                status: true
            });
            this.props.OnChatsFetch();
            this.websocketService = new WebsocketService(this.addMessage.bind(this));
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.user.status !== this.props.user.status) {
            this.props.OnChatsFetch();
        }
    }

    render() {
        console.log(this.props);
        if (this.props.user.status) {
            return (
                <Home chats={this.props.chats}/>
            );
        } else {
            return (
                <Grid container>
                    <Grid container>
                        <Grid item xs={12}>
                            {this.state.loading && !this.props.user.status && !this.props.user.error ?
                                <LinearProgress variant="query"/> : ""}
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={1} lg={4}/>
                        <Grid item xs={10} lg={4}>
                            <Login setLoading={this.setLoading.bind(this)}/>
                        </Grid>
                        <Grid item xs={1} lg={4}/>
                    </Grid>

                </Grid>
            )
        }

    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
        chats: state.chats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUserInfo: function (user) {
            dispatch(setLoginStatus(user))
        },
        OnChatsFetch: () => {
            dispatch(fetchChats());
        },
        addMessage: (message) => {
            dispatch(addMessage(message));
        },
        updateLastMessageInUser:(message) => {
            dispatch(addLastMessageToUser(message));
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;