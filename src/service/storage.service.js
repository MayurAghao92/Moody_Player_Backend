import ImageKit from "imagekit";
import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config({ quiet: true });


var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint : process.env.IMAGEKIT_URL_ENDPOINT
});

console.log("🔍 ENV Loaded Values:", {
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadFile(file){
    return new Promise((resolve,reject)=>{
        imagekit.upload({
            file:file.buffer,
            fileName:mongoose.Types.ObjectId().toString(),
            folder:"Songs"
        },(error,result)=>{
            if(error){
                reject(error)
            }else{
                resolve(result)
            }
        });
    });
}

export default uploadFile