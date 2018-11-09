import React, { Component } from 'react';
import './App.css';
import {Grid, Paper} from '@material-ui/core';

class App extends Component {
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={3}>
                        <Paper>xs=12</Paper>
                    </Grid>
                    <Grid item xs={9}>
                        <Paper>xs=12</Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default App;