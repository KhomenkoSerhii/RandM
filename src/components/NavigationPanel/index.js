import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        justifyContent: ' space-evenly'
    },
    title: {
        cursor: 'pointer '
    }
}));


const NavigationPanel = () => {

    const classes = useStyles();

    return (
        <>
            <div className={classes.grow}>
                <AppBar position="static">
                    <Toolbar className={classes.header}>
                        <Link to='/'>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Characters
                         </Typography>
                        </Link>
                        <Link to='/episodes'>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Episodes
                         </Typography>
                        </Link>
                        <Link to='/locations'>
                            <Typography className={classes.title} variant="h6" noWrap>
                                Locations
                         </Typography>
                        </Link>
                        <Link to='/my-watch-list'>
                            <Typography className={classes.title} variant="h6" noWrap>
                                My watch list
                         </Typography>
                        </Link>
                    </Toolbar>
                </AppBar>

            </div>
        </>

    );

}

export default NavigationPanel