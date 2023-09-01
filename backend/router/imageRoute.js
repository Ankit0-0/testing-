import { Router } from "express";
import { upload, Fname } from "../middlewares/multer.js";
import axios from "axios";
import FormData from "form-data";
const router = Router();

router.post("/imageroute", upload.single("image"), async (req, res) => {
  try {
    console.log("file ", req.file);

    if (!req.file || !req.file.buffer || req.file.size < 1500) {
      return res
        .status(400)
        .json({ error: "No file or file buffer available." });
    }

    const form = new FormData();
    const time = Date.now();
    form.append("testFile", req.file.buffer, {
      // filename: time + req.file.originalname,
      filename: "testFile",
      contentType: req.file.mimetype,
    });

    form.append("orignalFile", req.file.buffer, {
      // filename: time + req.file.originalname,
      filename: "orignalFile",
      contentType: req.file.mimetype,
    });

    const pythonRequest = await axios.post(
      "http://127.0.0.1:5000/upload",
      form,
      {
        headers: {
          ...form.getHeaders(),
        },
      }
    )

    console.log(pythonRequest.data);

    res.status(200).json({ executed: pythonRequest.data });
  } catch (error) {
    console.log("ml error: ", error);
    res.status(500).json({ error: "Error processing image with ML" });
  }
});

export default router;
