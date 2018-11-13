import React, {Component} from 'react';
import './App.css';
import {Grid, Paper} from '@material-ui/core';
import Login from "./components/Login";
import {connect} from "react-redux";
import 'simplebar'; // or "import SimpleBar from 'simplebar';" if you want to use it manually.
import 'simplebar/dist/simplebar.css';
import Home from "./components/Home";

class App extends Component {

    render() {
        console.log(this.props);
        if (!this.props.user.status) {
            return (
                <Home/>
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


function mapStateToProps(state){
    return {
        user: state.user
    }
}

const AppContainer = connect(mapStateToProps)(App);


export default AppContainer;