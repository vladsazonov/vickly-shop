import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {applyMiddleware, compose, createStore} from "redux";
import allReducers from './store/reducers/rootReducer'
import thunk from "redux-thunk";
import Provider from "react-redux/es/components/Provider";
import 'semantic-ui-css/semantic.min.css';
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    allReducers,
    composeEnhancer(applyMiddleware(thunk)),
);

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#006064',
            secondary: '#428e92',
            dark: '#00363a',
        },
        secondary: {
            main: '#428e92',
            secondary: '#f8342c'
        },
        background: {
            paper: '#fff',
            default: "#fff"
        },
        active: {
            backgroundColor: "rgba(0, 150, 136, 0.21)"
        },
    },
    shadows: ["none"]

});

ReactDOM.render(
    <Provider store={store}>
        <MuiThemeProvider theme={theme}>
            <App/>
        </MuiThemeProvider>
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./App', () => {
        ReactDOM.render(
            <Provider> store={store}>
                <MuiThemeProvider theme={theme}>
                    <App/>
                </MuiThemeProvider>
            </Provider>,
            document.getElementById('root')
        );
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
