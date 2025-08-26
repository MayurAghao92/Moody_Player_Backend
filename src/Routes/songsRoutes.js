import express from 'express';
import multer from 'multer';
import song from '../models/songModel.js';
import uploadFile from '../service/storage.service.js'

const upload=multer({storage:multer.memoryStorage()})

const router =express.Router();

router.post('/songs',upload.single('audio'),async(req,res)=>{
    console.log(req.body);
    console.log(req.file);
    const filedata=await uploadFile(req.file)
    console.log("Filedata:", JSON.stringify(filedata, null, 2));
    res.status(201).json({
        message:"file created successfully",
        song:req.body,
        filedata:filedata
    })
})


export default router;