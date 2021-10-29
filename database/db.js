import mongoose from 'mongoose';


const  Connection = async (URl) => {
    
    try{
        await mongoose.connect(URl, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log("Database success connected");
    }catch(error){
        console.log("Error while connecting mongodb ", error);
    }

}

export default Connection;