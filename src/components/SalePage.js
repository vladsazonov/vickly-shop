import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import Image from '../images/bb.jpg'
import {Avatar} from "@material-ui/core";

const styles = theme => ({
    root: {
        backgroundColor: '#fff',
        width: '50%',
        margin: '10px 0 0 10px',
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
    },

    ard: {
        display: 'flex',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        width: 151,
        borderRadius: '50%',
        backgroundImage: 'url(' +Image + ')',
    },
    controls: {
        display: 'flex',
        alignItems: 'center',
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
    },
    playIcon: {
        height: 38,
        width: 38,
    },
});

class SalePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {classes, theme} = this.props;

        return (
            <div className={classes.root}>


                <div>
                    <Typography variant="h6" gutterBottom>
                        Продажа
                    </Typography>
                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="firstName"
                                name="firstName"
                                label="Ваш ник в игре"
                                fullWidth
                                autoComplete="fname"
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Select
                                label="dfd"
                                // value={state.age}
                                value="Выберите игру"
                                // onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="outlined-full-width"
                                //label="Label"
                                // style={{ margin: 8 }}
                                placeholder="Название предмета"
                                // helperText="Full width!"
                                //    fullWidth
                                margin="normal"
                                variant="outlined"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />

                        </Grid><Grid item xs={12}>
                        <TextField
                            id="outlined-full-width"
                            //label="Label"
                            // style={{ margin: 8 }}
                            placeholder="Описание предмета"
                            // helperText="Full width!"
                               fullWidth
                            margin="normal"
                            variant="outlined"
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />
                    </Grid>

                        <Grid item xs={12}>
                            <div style={{display: 'flex', alignItems: 'center'}}>
                            <div >
                                <Typography>Загрузите изображение</Typography>

                            <Avatar style={{width: 80, height: 80}}>?</Avatar>
                            </div>

                            <Button
                                variant="contained"
                                component="label"
                            >
                                Upload File
                                <input
                                    type="file"
                                    style={{ display: "none" }}
                                />
                            </Button>
                               </div>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="address2"
                                name="address2"
                                label="Цена"
                                fullWidth
                                autoComplete="billing address-line2"
                            />
                            <Select
                                label="dfd"
                                // value={state.age}
                                value="Выберите игру"
                                // onChange={handleChange}
                                inputProps={{
                                    name: 'age',
                                    id: 'age-simple',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Ten</MenuItem>
                                <MenuItem value={20}>Twenty</MenuItem>
                                <MenuItem value={30}>Thirty</MenuItem>
                            </Select>
                        </Grid>
                        <Button>Продать</Button>
                    </Grid>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SalePage);