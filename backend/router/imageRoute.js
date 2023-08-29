import { Router } from "express";
import upload from "../middlewares/multer.js";

const router = Router();

router.post("/imageroute", upload.single('image'), (req, res) => {

    try {
        console.log("file uploaded", req.file);
        res.status(200).json({we:"working"})
    } catch (error) {
        console.log(error);
    }

    
});

export default router;

