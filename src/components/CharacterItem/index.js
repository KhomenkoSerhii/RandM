import React, { useState } from "react";

import ModalComponent from '../../components/Modal/'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 345,
    },
}));

const CharacterItem = ({
    image,
    name,
    gender,
    species,
    status,
}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(!open);
    };

    return (
        <>
            <div
                style={{ width: '300px' }}
                onClick={handleOpen}
            >
                <Card className={classes.root}>
                    <CardMedia
                        component="img"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                        </Typography>
                    </CardContent>
                </Card>

                <ModalComponent
                    onOpen={open}
                    handleClose={handleOpen}
                    image={image}
                    name={name}
                    gender={gender}
                    species={species}
                    status={status}
                />
            </div>
        </>
    );
};

export default CharacterItem;
