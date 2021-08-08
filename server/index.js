import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postsRouter from "./routes/posts.js";

const app= express();

app.use(bodyParser.json({limit:"30mb", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb", extended:true}));
app.use(cors());

app.use("/posts",postsRouter)

const CONNECTION_DB='mongodb+srv://Glody:2505@Jantar@cluster0.7mdt4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT= process.env.PORT || 5000;

mongoose.connect(CONNECTION_DB,{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>app.listen(PORT,()=>console.log(`Server is running on port: ${PORT}`)))
.catch((err)=>console.log(err.message));

mongoose.set('useFindAndModify',false);