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
            light: "#7986cb",
            main: "#2c3137", //аппбар и серчбар
            dark: "#00fff4",
            contrastText: "#fff",

        },
        secondary: {
            light: "#ffffff",
            main: "#37474f", //иконки
            dark: "#c51162",
            contrastText: "#fff",
        },
        text: {
            primary: "#fff",
            secondary: "rgba(0, 0, 0, 0.54)",
            disabled: "rgba(0, 0, 0, 0.38)",
            hint: "rgba(0, 0, 0, 0.38)",
        },
        background: {
            paper: "#2c3137",
            default: "#0018ff",
        },
        action: {
            active: "#ffffff",
            hover: "#46ff1c",
            hoverOpacity: 0.08,
            selected: "#ff1b00",
            disabled: "rgba(255, 255, 255, 0.15)",
            disabledBackground: "rgba(0, 0, 0, 0.12)",
        },
    },

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
