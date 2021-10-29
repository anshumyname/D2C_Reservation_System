import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    free: {
        border: '1px solid red', 
        width: '50px', height:'50px', 
        alignContent: 'center', 
        margin: 'auto',
        alignItems: 'center', 
        marginTop: '5px', 
        backgroundColor: 'rgba(0,255,0,0.5)'
    },
    booked: {
        border: '1px solid red', 
        width: '50px', height:'50px', 
        alignContent: 'center', 
        margin: 'auto',
        alignItems: 'center', 
        marginTop: '5px', 
        backgroundColor: 'rgba(255,0,0,0.5)'
    }
})

const Seat = ({seatno, free}) => {
    const classes = useStyles();
    
    return (
        <Box className={free? classes.free: classes.booked}>
            <Typography style={{alignItems: 'center'}}>{seatno}</Typography>
        </Box>
    )
}

export default Seat;