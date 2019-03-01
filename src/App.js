import React, {Component} from 'react';
import './App.css';
import Login from "./components/login/LoginForm";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import Home from "./components/Home";
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {PrivateRoute} from 'react-router-with-props';
import {observer} from "mobx-react";
import DevTools from "mobx-react-devtools";
import InviteForm from "./components/login/InviteForm";
import accountStore from "./store/AccountStore";
import {ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


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

    // componentWillMount() {
    //     this.websocketService = new WebsocketService(this.addMessage.bind(this));
    // }
    //
    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     if (accountStore.status === "authed") {
    //         chatsStore.fetchChats()
    //     }
    // }

    render() {
        console.log(this.props);
        let lol = accountStore;
        const login = accountStore.status === "authed";
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <PrivateRoute path="/home"
                                      component={Home}
                                      redirectTo="/login"
                                      authed={login}/>
                        <PrivateRoute exact path="/login"
                                      component={Login}
                                      redirectTo="/home"
                                      authed={!login}/>
                        <Route exact path="/invite/:invite_id" component={InviteForm}/>
                        <Route render={() => <Redirect to="/home"/>}/>
                    </Switch>
                </BrowserRouter>
                <ToastContainer  position="bottom-right"/>
                <DevTools/>
            </div>
        )

    }
}

export default App;