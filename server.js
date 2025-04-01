import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import connectToMongoDB from './database/connectdb.js';
 const PORT=process.env.PORT||5000;
 dotenv.config(); 
const app=express();
app.get("/", (req, res)=>{
    res.send("major project")
})
app.listen(PORT, () => {
    connectToMongoDB();
    console.log(`✅ Server running on port ${PORT}`);
});
