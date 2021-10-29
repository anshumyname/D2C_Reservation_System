import { Typography, Box, Button, Dialog, DialogTitle } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useEffect, useState } from "react";
import { generate_random_seats } from "./SeatGenerate";
import { update } from "../service/update";

const useStyles = makeStyles({
    view: {
        display: 'grid',
        gridTemplateAreas: "'header' 'content' 'footer'",
        gridTemplateColumns: '50px 50px 50px 50px 50px 50px 50px 50px 50px 50px 50px',
        gridGap: '10px',
        padding: '2px',
        alignItems: 'center',
        marginLeft: '15%',
        paddingBottom: '10px'

    },
    seats: {
        alignContent: 'center',
        alignItems: 'center'
    },
    modaltext: {
        padding: '15px',
        alignItems: 'center',
        margin: 'auto',
        background: 'rgba(34,52,54,0.1)',
        textAlign: 'center',
        fontWeight: '1000',

    }
})







const Seats = ({seats, setseats}) => {
    const classes = useStyles();
    const [open, setopen] = useState(false);
    const handleClose = () => {
        setopen(!open)
    };
    const reset = () => {
        const response = generate_random_seats();
        update(response[1])
        setseats(response[0])
        handleClose()
        
    }
    
    useEffect(()=> {
         
    },[seats])
    
    return (
        <>
        <Box className={classes.seats}>
            <h1>Current Status of Reservation</h1>
            <Box className={classes.view}>
                {seats}
            </Box>
        </Box>
        <Button variant="contained" color="secondary" onClick= {reset} style={{marginLeft: '750px'}}>Reset Sesssion</Button>
        <Dialog onClose={handleClose} open={open}>
                <DialogTitle style={{background: 'rgba(34,52,54,0.5)', color: 'white'}}>Information</DialogTitle>
                <Box className={classes.modaltext}>
                    <Typography><b>RESERVATIONS RESET SUCCESSFULL<br></br> SOME SEATS ARE BOOKED INITIALLY</b> </Typography>
                </Box>
        </Dialog>
        </>
    )
}

export default Seats;