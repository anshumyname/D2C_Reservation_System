import mongoose from 'mongoose';


const SeatSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true,
    },
    availability: {
        type: Array,
        required: true,

    }
})

const seats = mongoose.model('seat',SeatSchema);
export default seats;