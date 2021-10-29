import {  Box, FormControl, Dialog, DialogTitle, Select, MenuItem, Button, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import { get_seats } from "../service/api";
import { update } from "../service/update";
import { generate_seats } from "./SeatGenerate";
import { seat_allotment } from "./Seat_Allocaion.js";

const useStyles = makeStyles({
    buttons: {

        padding: '10px',
        '& > *': {
            padding: '10px',
            margin: 'auto'

        }
    },
    modaltext: {
        padding: '5px',
        alignItems: 'center',
        margin: 'auto',
        background: 'rgba(34,52,54,0.1)',
        textAlign: 'center',
        fontWeight: '1000',
        height: '50vh'

    }
})



const Booking = ({ setseats }) => {
    const classes = useStyles();
    const [input, setinput] = useState(1);
    const [open, setopen] = useState(false);
    const [text, settext] = useState(null);
    
    const handleClose = () => {
        setopen(!open)
    };

    const handleClick = async () => {
        var data = await get_seats();
        var seats = data['availability']
        
        var res = seat_allotment(seats, Number(input));
        var newseats = res[0];
        var allotedseats = res[1];

        if (allotedseats === -1) {
            settext(<Typography>"Sorry There aren't required number of seats available"</Typography>)
            handleClose();
            return;
        }


        await update(newseats);
        
        var newstate = generate_seats(newseats);
        setseats(newstate);
        var s = allotedseats.map((item) => (
            <Box>
                <b><p>{item}</p></b>
            </Box>
        ))

        settext(<Box><b><Typography>Congratulations! Reservation is successfull </Typography><Typography> Following seats have been booked for you</Typography> {s}</b></Box>)
        handleClose();


    }

    return (
        <Box style={{ display: 'block' }}>
            <h1>Enter number of seats to book (1-7) </h1>
            <FormControl >

                <Select
                    labelId="number"
                    id="number"
                    value={input}
                    label="1"
                    onChange={(event) => { setinput(event.target.value); }}
                >
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                    <MenuItem value={6}>6</MenuItem>
                    <MenuItem value={7}>7</MenuItem>
                </Select>
            </FormControl>
            <Box className={classes.buttons}>
                <Button variant="contained" color="primary" onClick={handleClick}>Reserve</Button>
            </Box>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle style={{background: 'rgba(34,52,54,0.5)', color: 'white'}}>Information</DialogTitle>
                <Box className={classes.modaltext}>
                    <Typography>{text}</Typography>
                </Box>
            </Dialog>
        </Box>
    )
}

export default Booking;