import axios from 'axios';
const URL = "";


export const update_seats = async ( data ) => {
    try {
        await axios.post((`${URL}/update`),data)
    }
    catch(error) {
        console.log("Error while calling update seats api", error )
    }
}


export const get_seats = async () => {
    try {
        const seats = await axios.get((`${URL}/getseats`))
        return seats.data;
    }
    catch(error) {
        console.log("Error while calling update seats api", error )
    }
}