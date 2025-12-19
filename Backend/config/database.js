import mongoose from "mongoose";

const connectDB = () =>{
    mongoose.connect("mongodb://localhost:27017/login-user", {
    }).then((data)=>{
        console.log(`MongoDB connected with ${data.connection.host}`);
    }).catch((err)=>{
        console.log(`Cant Connect ${err}`);
    })
}
export default connectDB