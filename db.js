import mongoose from "mongoose";
import dotenv from 'dotenv';

const connection = () => {
    const mongoose_Url = "mongodb+srv://manojsbd:manojsbd@cluster0.epllv7u.mongodb.net/?retryWrites=true&w=majority"
    mongoose.connect(mongoose_Url,{useNewURLParser:true})
    mongoose.connection.on("connected",()=>{
        console.log("Database Connected")
    })
    mongoose.connection.on("Disconnected",()=>{
        console.log("Database DisConnected")
    })
    mongoose.connection.on("error",(err)=>{
        console.log("Error",err.message)
    })
}

export default connection