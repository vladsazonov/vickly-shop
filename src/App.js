import React, {Component} from 'react';
import './App.css';
import {Grid, Paper} from '@material-ui/core';
import Login from "./components/Login";
import {connect} from "react-redux";

class App extends Component {
    render() {
        console.log(this.props);
        if (this.props.user.status) {
            return (
                <div>
                    <Grid container>
                        <Grid item xs={3}>
                            <Paper>xs=12</Paper>
                        </Grid>
                        Hello World
                        <Grid item xs={9}>
                            <Paper>xs=12</Paper>
                        </Grid>
                    </Grid>
                </div>
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