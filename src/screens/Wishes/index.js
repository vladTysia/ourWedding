import React, {useState} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Popover from '@material-ui/core/Popover';
import LibraryMusicIcon from '@material-ui/icons/LibraryMusic';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import emailjs from "emailjs-com";


const useStyles = makeStyles((theme) => ({
    popover: {
        padding: 15,
        backgroundColor: '#70A076',
        color: '#e8e8e8',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Wishes() {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [surname, setSurName] = useState('');
    const [music, setMusic] = useState('');
    const [openPopover, setOpenPopover] = useState(false);

    const send = (e) => {
        e.preventDefault();
        const params = {
            firstname: name,
            lastname: surname,
            music,
        };

        emailjs.send('service_lr5hj49', 'template_5qmgwhy', params, 'user_gczuSkzs1GBpIYvYpd5U3')
            .then(function(response) {
               setMusic('');
               setSurName('');
               setName('');
               setOpenPopover(true);
               setTimeout(() => setOpenPopover(false), 1500);
            }, function(err) {
                console.log('FAILED...', err);
            });
    }

    return (
        <div id="wish" className="grey">
            <Container maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LibraryMusicIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                       Хочу услышать эти песни
                    </Typography>
                    <form className={classes.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="firstname"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="Имя"
                                    value={name}
                                    onChange={({target: {value}}) => setName(value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastname"
                                    label="Фамилия"
                                    name="lastName"
                                    value={surname}
                                    onChange={({target: {value}}) => setSurName(value)}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="music"
                                    label="Название песен"
                                    id="password"
                                    value={music}
                                    multiline
                                    rows={4}
                                    onChange={({target: {value}}) => setMusic(value)}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={send}
                            disabled={!name || !surname || !music}
                            className={classes.submit}
                        >
                            Отправить пожелание
                        </Button>
                    </form>
                </div>
            </Container>
            <Popover
                anchorReference="anchorPosition"
                anchorPosition={{ top: 0, right: 0 }}

                open={openPopover}
            >
                <div className={classes.popover}>Твое пожелание было доставлено!</div>
            </Popover>
        </div>
    );
}
