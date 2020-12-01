import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        maxWidth: 345,
    },
}));

const ModalComponent = ({
    onOpen,
    handleClose,
    image,
    name,
    gender,
    species,
    status
}) => {
    const classes = useStyles();

    return (
        <>
            <Modal
                className={classes.modal}
                open={onOpen}
                onClose={handleClose}
            >
                <Card className={classes.root}
                >
                    <CardMedia
                        component="img"
                        image={image}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Gender: {gender}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Species: {species}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            Status: {status}
                        </Typography>
                    </CardContent>
                </Card>
            </Modal>
        </>
    );
}
export default ModalComponent