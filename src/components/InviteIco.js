import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd'
import IconButton from "@material-ui/core/IconButton/IconButton";
import TextField from "@material-ui/core/TextField/TextField";
import WorkGroupList from "./WorkGoupList";


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const styles = theme => ({
    paper: {
        position: 'absolute',
        [theme.breakpoints.up('xs')]: {
            width: '96%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '55%',
        },
        [theme.breakpoints.up('md')]: {
            width: '50%',
        },
        [theme.breakpoints.up('lg')]: {
            width: '29%',
        },
        width: 'auto',
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing.unit * 4,
    },
    textField:{
        width: '-webkit-fill-available',
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
});

class SimpleModal extends React.Component {
    state = {
        open: false,
    };


    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };
    handleChangeSurname = surname => event => {
        this.setState({
            [surname]: event.target.value,
        });
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    handleClose = () => {
        this.setState({open: false});
    };

    render() {
        const {classes} = this.props;

        return (
            <div>
                <IconButton
                    onClick={this.handleOpen}>
                    <PersonAdd/>
                </IconButton>
                <Modal
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    style={{zIndex: 5000}}
                >
                    <div style={getModalStyle()} className={classes.paper}>
                        <form className={classes.container} noValidate autoComplete="off">
                            <Typography variant="h5" align="center"> Приглашение нового пользователя</Typography>
                            <TextField
                                id="standard-name"
                                label="Введите имя "
                                className={classes.textField}
                                value={this.state.name}
                                onChange={this.handleChange('name')}
                                margin="normal"
                            />
                            <TextField
                                id="standard-surname"
                                label="Введите фамилию "
                                className={classes.textField}
                                value={this.state.surname}
                                onChange={this.handleChangeSurname('surname')}
                                margin="normal"
                            />
                            <WorkGroupList/>
                        </form>
                        <Button color="primary" onClick={this.handleClose}>Пригласить</Button>
                        <Button color="secondary" onClick={this.handleClose}>Закрыть</Button>
                    </div>
                </Modal>
            </div>
        );
    }
}

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);


export default SimpleModalWrapped;