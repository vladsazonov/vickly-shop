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
import {Switch, Route, BrowserRouter, Redirect} from "react-router-dom";
import {PropsRoute, PublicRoute, PrivateRoute} from 'react-router-with-props';
import accountStore from "./store/AccountStore";
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import InviteForm from "./components/InviteForm";

@observer
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
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute exact path="/" component={Home} authed={this.props.user.status}
                                      redirectTo="/login"
                                      chats={this.props.chats}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/invite/:invite_id" component={InviteForm}/>
                        <Route render={() => <Redirect to="/"/>}/>
                    </Switch>
                </BrowserRouter>
                <DevTools/>
            </div>
        )

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
        updateLastMessageInUser: (message) => {
            dispatch(addLastMessageToUser(message));
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;