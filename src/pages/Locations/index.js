import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import NavigationPanel from '../../components/NavigationPanel/'
import TextField from '@material-ui/core/TextField';
import PaginationComponent from '../../components/Pagination/'
import MenuItem from '@material-ui/core/MenuItem';
import TableComponent from '../../components/Table/'

const typeInLoc = [
    {
        value: 'planet'
    },
    {
        value: 'game'
    },
    {
        value: 'arcade'
    },
    {
        value: 'space station'
    },
    {
        value: 'menagerie'
    },
    {
        value: 'microverse'
    },
    {
        value: 'daycare'
    },
]

const useStyles = makeStyles((theme) => ({

    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

const Locations = () => {
    const classes = useStyles();
    const [locationValue, setLocationValue] = useState('')
    const [location, setLocations] = useState([]);
    const [locName, setLocName] = useState([]);
    const [dimension, setDimension] = useState([]);

    const changeInputValue = (callback) => (e) => {
        callback(e.target.value)
    }

    return (
        <>
            <NavigationPanel />
            <form className={classes.root} noValidate autoComplete="off">
                <TextField
                    id="standard-select-currency"
                    select
                    label="Select type"
                    onChange={changeInputValue(setLocationValue)}
                    value={locationValue}
                    helperText="Select type"
                >
                    {typeInLoc.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.value}
                        </MenuItem>
                    ))}
                </TextField >
                <TextField id="standard-basic"
                    label="Filter by Name"
                    onChange={changeInputValue(setLocName)}
                />
                <TextField id="standard-basic"
                    label="Filter by Dimension"
                    onChange={changeInputValue(setDimension)}
                />
            </form >

            <TableComponent
                name='Name'
                dimension='Dimension'
                id='ID'
                type='Type'
                dataSource={location}
            />
            <PaginationComponent
                setLocations={setLocations}
                propsCase='locations'
                locationValue={locationValue}
                locName={locName}
                dimension={dimension}
            />
        </>
    )
}

export default Locations






