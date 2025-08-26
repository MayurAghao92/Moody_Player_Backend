import dotenv from 'dotenv';
dotenv.config({ quiet: true });
import app from "./src/app.js";
import connectDB from "./src/Database/db.js";


connectDB();

app.listen(3000,()=>{
    console.log("Server Started")
})