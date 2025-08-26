import mongoose from "mongoose";

const songSchema= new mongoose.Schema({
    title:String,
    artist:String,
    audio:String,
})


const song = mongoose.model('song',songSchema);


export default song;