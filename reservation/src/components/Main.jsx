import Booking from "./Booking";
import Seats from "./Seats";
import {Box} from  '@material-ui/core';
import { makeStyles} from "@material-ui/styles";
import { useState } from "react";
import { generate_random_seats } from "./SeatGenerate";
import { update } from "../service/update";

const useStyles = makeStyles({
    mainframe: {
        background: 'rgba(255,255,204,0.5)'
    },
    box: {
        display:'flex',
    },
    left: {
        width:'30%',
        border: '10px solid red',
        height: '90vh',
        marginBottom:'2px',
        marginLeft: '10px'
    },
    right: {
        width: '70%',
        border: '10px solid green',
        
    }
})


const Main = () =>  {
    const classes = useStyles();
    const response = generate_random_seats();
    const [seats, setseats] = useState(response[0])
    const fun = async() => {
        update(response[1])
    }
    // fun()
    return (
        <Box className={classes.mainframe}>
            <h1>Reservation Project D2C</h1>
            <Box className={classes.box}>
                <Box className={classes.left}>
                    <Booking setseats={setseats}/>
                </Box>
                <Box className={classes.right} >
                    <Seats  seats={seats} setseats={setseats}/>
                </Box>
            </Box>
        </Box>
    )
}




export default Main;