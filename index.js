import express from "express";
import cors from "cors";
import dbConfig  from "./scr/config/dbConfig.js";
const app = express();
app.use(cors());
dbConfig();
app.listen(3000,()=>{
    console.log("app listening at port 3000");
});