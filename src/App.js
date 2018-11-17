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

class App extends Component {


    componentWillMount() {
        if (localStorage.getItem("token")) {
            this.props.setUserInfo({
                last_name: localStorage.getItem("last_name"),
                first_name: localStorage.getItem("first_name"),
                token: localStorage.getItem("token"),
                status: true
            });
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
                    <Grid item xs={4}/>
                    <Grid item xs={4}>
                        <Login/>
                    </Grid>
                    <Grid item xs={4}/>
                </Grid>
            )
        }

    }
}


function mapStateToProps(state) {
    return {
        user: state.user,
        chats:state.chats
    }
}

function mapDispatchToProps(dispatch) {
    return {
        setUserInfo: function (user) {
            dispatch(setLoginStatus(user))
        },
        OnChatsFetch: () => {
            dispatch(fetchChats());
        }
    }
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


export default AppContainer;