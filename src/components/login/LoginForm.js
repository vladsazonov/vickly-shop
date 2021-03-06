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
import withStyles from '@material-ui/core/styles/withStyles';
import div from "@material-ui/core/Grid/Grid";
import {observer} from "mobx-react";
import accountStore from "../../store/AccountStore";
// import Background from "../../images/loginBack.jpg"


const styles = theme => ({
    backg: {
        // backgroundImage: `url(${Background})`,
        display: 'flex',
        top: 0,
        bottom: 0,
        right: 0,
        position: 'absolute',
        left: 0,
        justifyContent: 'center',
        minHeight: '100vh',
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {},
        [theme.breakpoints.down('xs')]: {
           minHeight: '100%',
        },
        backgroundColor: theme.palette.primary.main,
    },
    main: {
        display: 'block', // Fix IE 11 issue.
        [theme.breakpoints.down('xs')]: {
            width: 300,
        },
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
        },
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
        boxShadow: theme.shadows[0],
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: theme.palette.secondary.dark,
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
class LoginForm extends React.Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.login.value + "  " + e.target.password.value);
        //const { login, password } = this.state;
        accountStore.loginUser(e.target.login.value, e.target.password.value);
        //this.props.setLoading();
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.backg}>
                <main className={classes.main}>
                    <CssBaseline/>
                    <Paper
                        className={classes.paper}>
                        <Avatar
                            className={classes.avatar}>
                            <LockIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Вход в систему Vicly
                        </Typography>
                        <form
                            onSubmit={this.handleSubmit.bind(this)}
                            className={classes.form}>
                            <FormControl
                                margin="normal"
                                required
                                fullWidth>
                                <InputLabel
                                    htmlFor="login"> Логин </InputLabel>
                                <Input id="login" name="login" autoFocus/>
                            </FormControl>
                            <FormControl margin="normal" required fullWidth>
                                <InputLabel htmlFor="password">Пароль</InputLabel>
                                <Input name="password" type="password" id="password"
                                       autoComplete="current-password"/>
                            </FormControl>
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary"/>}
                                label="Запомнить меня"/>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}>
                                Войти
                            </Button>
                        </form>
                    </Paper>
                </main>
            </div>
        );
    }
}

export default withStyles(styles)(LoginForm);