import express from "express";
import cors from "cors";
import dbConfig  from "./scr/config/dbConfig.js";
import apiRouter from "./scr/api/index.js";
import ErrorHandlerMiddleware from "./scr/middlewares/common/error_handler.middleware.js";
import e from "express";
const app = express();
app.use(cors());
dbConfig();
app.use(express.json())
app.use("/api",apiRouter);
app.use((err,req,res,next)=>{
    return ErrorHandlerMiddleware(err,req,res,next);
})
const port = process.env.PORT || 3030;
app.listen(port,()=>{
    console.log("app listening at port 3030");
});