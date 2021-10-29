import seats from "../model/Seat.js";

export const updateData = async (request, response) =>{
    try{
        
        const newarray = new seats(request.body);
        let exist = await seats.findOne({name: 'seat_status_array'})
        
        if(exist){
            await seats.findByIdAndUpdate(exist._id, {availability: request.body['availability']})
            response.status(200).json("Data Updated Sucessfully")    
            return;
        }else{
            await newarray.save();
        }
        response.status(200).json("Data Created Sucessfully")

    }
    catch(error){
        response.status(500).json(error);
    }
}

export const getData = async (request, response) =>{
    try{
        const data = await seats.findOne({name: 'seat_status_array'});
        
        response.status(200).json(data)

    }
    catch(error){
        response.status(500).json(error);
    }
}