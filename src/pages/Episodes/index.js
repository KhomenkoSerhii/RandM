import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationPanel from '../../components/NavigationPanel/'
import TextField from '@material-ui/core/TextField';
import PaginationComponent from '../../components/Pagination/'
import TableComponent from '../../components/Table/'

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Episodes = () => {
    const classes = useStyles();
    const [value, setValue] = useState('')
    const [episodes, setEpisodes] = useState([]);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <>
            <NavigationPanel />
            <form className={classes.root}
                noValidate
                autoComplete="off">
                <TextField id="standard-basic"
                    label="Filter by Name"
                    onChange={handleChange}
                />
            </form>

            <TableComponent
                name='Name'
                dimension='Episode'
                id='ID'
                type='Air Date'
                dataSource={episodes}
            />
            <PaginationComponent
                setEpisodes={setEpisodes}
                propsCase='episodes'
                value={value}
            />
        </>
    )
}

export default Episodes






