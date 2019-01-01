import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {setLoginPending, tryLogin} from "../store/actions/loginActions";
import {connect} from "react-redux";
import withStyles from '@material-ui/core/styles/withStyles';
import LinearProgress from "@material-ui/core/LinearProgress/LinearProgress";
import Grid from "@material-ui/core/Grid/Grid";

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            invite: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.login.value + "  " + e.target.password.value);
        //const { login, password } = this.state;
        this.props.onLogin(e.target.login.value, e.target.password.value);
        this.props.setLoading();
    };

    handleInviteSignUp = () => {
        //TODO action
        this.toInvite(false);
    };

    toInvite = (isInvite) => {
        if (this.state.invite === isInvite)
            return;
        this.setState({
            invite: isInvite
        })
    };

    render() {
        const {classes} = this.props;
        return !this.state.invite ? (
                <Grid container>
                    <Grid item xs={1} lg={4}/>
                    <Grid item xs={10} lg={4}>
                        <main className={classes.main}>
                            <CssBaseline/>
                            <Paper
                                className={classes.paper}>
                                < Avatar
                                    className={classes.avatar}>
                                    <LockIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <form
                                    onSubmit={this.handleSubmit.bind(this)}
                                    className={classes.form}>
                                    <FormControl
                                        margin="normal"
                                        required
                                        fullWidth>
                                        <InputLabel
                                            htmlFor="login"> Login </InputLabel>
                                        <Input id="login" name="login" autoFocus/>
                                    </FormControl>
                                    <FormControl margin="normal" required fullWidth>
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input name="password" type="password" id="password"
                                               autoComplete="current-password"/>
                                    </FormControl>
                                    <FormControlLabel
                                        control={
                                            <Checkbox value="remember" color="primary"/>
                                        }
                                        label="Remember me"/>
                                    < Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        className={classes.submit}
                                    >
                                        Sign in
                                    </Button>
                                    <
                                        Button
                                        fullWidth
                                        style={
                                            {
                                                marginTop: "10px"
                                            }
                                        }
                                        onClick={() =>
                                            this.toInvite(true)
                                        }>
                                        Invite
                                    </Button>
                                </form>
                            </Paper>
                        </main>
                    </Grid>
                    <Grid item xs={1} lg={4}/>
                </Grid>
            ) :
            (
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
                                <InputLabel htmlFor="inviteid">Invite id</InputLabel>
                                <Input id="inviteid"/>
                            </FormControl>
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
                            <Button fullWidth style={{marginTop: "10px"}} onClick={() => this.toInvite(false)}>
                                Sign in
                            </Button>
                        </form>
                    </Paper>
                </main>
            );
    }


}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => ({
    onLogin: (user, password) => {
        dispatch(tryLogin(user, password));
    }
});

const styledLogin = withStyles(styles)(Login);

const LoginContainer = connect(
    mapStateToProps,
    mapDispatchToProps)
(styledLogin);

export default LoginContainer;