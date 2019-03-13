import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import {observer} from "mobx-react";


const styles = theme => ({
    emptyChat: {
        top: 40,
        bottom: 0,
        right: 0,
        [theme.breakpoints.down('xs')]: {
            left: 0,
        },
        left: '30%',
        position: 'fixed',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    empty: {}
});

@observer
class ChatWindowEmpty extends React.Component {
    render() {
        const {classes} = this.props;
        return (
            <div className={classes.emptyChat}>
                <div className={classes.empty}>
                    <Typography variant="h5">Выберите диалог...</Typography>
                </div>
            </div>
        );
    }
}

const styledWindow = withStyles(styles, {withTheme: true})(ChatWindowEmpty);

export default styledWindow;
