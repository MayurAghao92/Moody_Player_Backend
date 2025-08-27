import express from 'express';
import multer from 'multer';
import songModel from '../models/songModel.js';
import uploadFile from '../service/storage.service.js'

const upload=multer({storage:multer.memoryStorage()})

const router =express.Router();

router.post('/songs',upload.single('audio'),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const filedata=await uploadFile(req.file)
    // console.log(filedata);

    const song = await songModel.create({
        title:req.body.title,
        artist:req.body.artist,
        audio:filedata.url,
        mood:req.body.mood,
    })

    res.status(201).json({
        message:"file created successfully",
        song:song,
    })
})


export default router;