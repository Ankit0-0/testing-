import  express  from "express";
import router from "./router/imageRoute.js"
import cors from 'cors'
// import fileUpload from "express-fileupload";
const app = express();

const port = 5999

app.use(express.json());

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true,
}))

// app.use(fileUpload({
//     useTempFiles: true
// }))

app.get('/', (req, res) => {
    res.send(`Welcome`)
})

app.use('/api', router)

app.listen(port, ()=> {
    console.log(`port is listening on ${port}`);
    
})