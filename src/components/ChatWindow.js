import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import '../css/Dialog.css'
import ListItem from "@material-ui/core/ListItem/ListItem";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import Icon from "@material-ui/core/Icon/Icon";
import SendIcon from '@material-ui/icons/Send'
import {tryLogin} from "../store/actions/loginActions";
import connect from "react-redux/es/connect/connect";
import buttonAction from "../store/actions/buttonAction"
import SendMessageBar from "./SendMessageBar";

const message = 'Опять на работу сука блять';
const image = 'https://pp.userapi.com/c604521/v604521198/21993/7DxyyX7M-YY.jpg';
const name = 'Константин Константинович Константинопольский';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    leftIcon: {
        marginRight: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    iconSmall: {
        fontSize: 20,
    },
});

class ChatWindow extends React.Component {

    render() {
        const {classes} = this.props;
        return (
                <div>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                        Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                        viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                        at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </Typography>
                    <Typography paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent
                        elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                        hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum
                        velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing.
                        Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis
                        viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo.
                        Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus
                        at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                        ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </Typography>
                    <SendMessageBar/>
                </div>

        );
    }
}

function mapStateToProps (state) {
    return {
        color: state.button.color
    }
}


function mapDispatchToProps(dispatch){
    return {
        changeColor: function () {
            dispatch(buttonAction());
        }
    }
}

const styledWindow =  withStyles(styles, {withTheme: true})(ChatWindow);



const ChatWindowsContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
(styledWindow);

export default ChatWindowsContainer
