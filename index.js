import express from "express";
import cors from "cors";
import dbConfig  from "./scr/config/dbConfig.js";
import apiRouter from "./scr/api/index.js";
const app = express();
app.use(cors());
dbConfig();
app.use(express.json())
app.use("/api",apiRouter);
app.listen(3000,()=>{
    console.log("app listening at port 3000");
});