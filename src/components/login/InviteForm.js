import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Grid from "@material-ui/core/Grid/Grid";
import {observer} from "mobx-react";
import accountStore from "../../store/AccountStore";

const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
        [theme.breakpoints.up('xs')]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: '50%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
});

@observer
class InviteForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.login.value + "  " + e.target.password.value);
        //const { login, password } = this.state;
        //accountStore.loginUser(e.target.login.value, e.target.password.value);
        //this.props.setLoading();
    };


    toLoginPage = (isInvite) => {
        this.props.history.push('/login')
    };

    render() {
        const {classes} = this.props;
        return(
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Invite
                        </Typography>
                        <form onSubmit={this.handleSubmit.bind(this)} className={classes.form}>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="login">Login</InputLabel>
                                <Input id="login"/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Password</InputLabel>
                                <Input id="password" autoComplete="email"/>
                            </FormControl>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Sign up
                            </Button>
                            <Button fullWidth style={{marginTop: "10px"}} onClick={() => this.toLoginPage()}>
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            );
    }


}

export default withStyles(styles)(InviteForm);