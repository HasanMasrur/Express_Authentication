import mongoose  from "mongoose";

const userSchema = mongoose.Schema({
    name:{
        type :String,
        required:true,
    },
    username:{
        type:String,
        required:true,
    },
    password: {
        type:String,
        required: true
    }
});

const UserModel =  mongoose.model('User',userSchema);

export default UserModel ;