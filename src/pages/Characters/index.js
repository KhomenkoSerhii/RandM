import React, { useState } from 'react'

import NavigationPanel from '../../components/NavigationPanel/'
import PaginationComponent from '../../components/Pagination/'
import CharacterItem from '../../components/CharacterItem/'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

const gender = [
    {
        value: 'Female',
    },
    {
        value: 'Male ',
    },
    {
        value: 'Genderless ',
    },
    {
        value: 'unknown ',
    },

];

const status = [
    {
        value: 'Alive',
    },
    {
        value: 'Dead ',
    },
    {
        value: 'unknown',
    },

];

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    charContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        textAlign: 'center',
        justifyContent: 'space-evenly'
    }
}));

const Characters = () => {
    const classes = useStyles();
    const [stateStatus, setStateStatus] = useState('');
    const [stateGender, setStateGender] = useState('');
    const [characters, setCharacters] = useState([]);
    const [valueSpecies, setValueSpecies] = useState('')

    const changeInputValue = (callback) => (e) => {
        callback(e.target.value)
    }

    return (
        <>
            <NavigationPanel />
            <form className={classes.root}
                noValidate
                autoComplete="off">
                <div>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={stateStatus}
                        onChange={changeInputValue(setStateStatus)}
                        helperText="Select status"
                    >
                        {status.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField
                        id="standard-select-currency"
                        select
                        label="Select"
                        value={stateGender}
                        onChange={changeInputValue(setStateGender)}
                        helperText="Select gender"
                    >
                        {gender.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.value}
                            </MenuItem>
                        ))}
                    </TextField>
                    <TextField id="standard-basic"
                        label="Filter by Species"
                        onChange={changeInputValue(setValueSpecies)}
                    />
                </div>
            </form>

            <div className={classes.charContainer}
            >
                {characters?.results?.map((i, index) => (

                    <CharacterItem
                        index={index}
                        key={i.image}
                        image={i.image}
                        name={i.name}
                        gender={i.gender}
                        species={i.species}
                        status={i.status}
                        id={i.id}
                    />
                ))}
            </div >
            <PaginationComponent
                setCharacters={setCharacters}
                status={stateStatus}
                gender={stateGender}
                species={valueSpecies}
                propsCase='characters'
            />
        </>
    )
}

export default Characters