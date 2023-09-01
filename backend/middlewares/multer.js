import multer from "multer";

import { PythonShell } from "python-shell";
let Fname 
// set up storage for uploaded files locally;-
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, "uploads/");
//   },
//   filename: (req, file, cb) => {
//      Fname = Date.now() + "-" + file.originalname;
//     cb(null, Fname);
//   },
// });

// set up storage for uploading files to the server
const storage = multer.memoryStorage()

const upload = multer({
  storage,
  limits: {
    fileSize: 20 * 1024 * 1024, // 10 MB (adjust as needed)
  },
});

export  { upload, Fname };
