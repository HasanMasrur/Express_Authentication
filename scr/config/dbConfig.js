import mongoose from "mongoose";

const dbConfig = async ()=>{
try {
    const conn = mongoose.connect('mongodb+srv://Hasan:Hasan@cluster0.s2uo3ke.mongodb.net/?retryWrites=true&w=majority',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log('mongoose connection successful');
} catch (error) {
    console.log(error);
}
}
export default dbConfig ;