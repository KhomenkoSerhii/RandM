import React, { useEffect, useState } from 'react'
import NavigationPanel from '../../components/NavigationPanel/'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        padding: '20px 10px',
        width: '500px',
        margin: '0 auto'
    },
    inputContainer: {
        display: 'flex',
        width: '250px'
    },
    list: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
    },
    listItem: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
}));

const WatchList = () => {

    const classes = useStyles();
    const [checked, setChecked] = React.useState('');
    const [state, setState] = useState({
        list: []
    })
    const [value, setValue] = useState('')

    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const addTask = (e) => {

        const Items = {
            value: value,
            Date: new Date().toLocaleString()
        };

        if (localStorage.getItem('list') == null) {
            const list = []
            list.push(Items);
            localStorage.setItem("list", JSON.stringify(list))
        }
        else {
            const list = JSON.parse(localStorage.getItem('list'))
            list.push(Items)
            localStorage.setItem("list", JSON.stringify(list))
        }
        setState({
            list: JSON.parse(localStorage.getItem('list'))
        });
        setValue(' ')
    }

    useEffect(() => {
        const list = window.localStorage.getItem('list');
        const parsedList = JSON.parse(list);
        if (list == null) {
            return false
        }
        else {
            setState({
                list: parsedList,
            })
        }
    }, [])

    const deleteItem = (index) => {
        let listValue = JSON.parse(localStorage.getItem('list'));
        listValue.splice(index, 1)
        setState({ list: listValue });
        localStorage.setItem('list', JSON.stringify(listValue))
    }

    const handleToggle = (value) => () => {
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];
        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }
        if (newChecked.length > 0) {
            setChecked(true);
        }

        setChecked([...newChecked]);
    };

    return (
        <>
            <NavigationPanel />
            <div className={classes.mainWatchListContainer}>

                <div className={classes.container}>
                    <div className={classes.inputContainer}>
                        <TextField id="standard-basic"
                            label="AddTask..."
                            onChange={handleChange}
                            value={value}
                        />

                        <Button onClick={() =>
                            addTask()
                        }
                            className="button" >Add</Button>
                    </div>
                    <ol className={classes.list}>
                        {
                            state.list.map((item, index) => {
                                const labelId = `checkbox-list-secondary-label-${item}`;
                                return (
                                    <li
                                        key={index}
                                        className={classes.listItem}>
                                        {item.value}
                                        <div>
                                            <Button className="button"
                                                type="button"
                                                value="delete"
                                                onClick={() => deleteItem(index)}>Delete</Button>

                                            <Checkbox
                                                edge="end"
                                                onChange={handleToggle(item)}
                                                checked={checked.indexOf(item) !== -1}
                                                inputProps={{ 'aria-labelledby': labelId }}
                                            />
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    )
}

export default WatchList
