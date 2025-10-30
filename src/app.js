import express from "express";
const app = express();
import cors from "cors";

app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));


app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",")||"http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    credentials: true,
    allwedHeaders: ["Content-Type", "Authorization"]
    }))


app.get('/', (req, res) => {
  res.send('Hello World!')
})
 app.get("/facebook",(req,res)=>{
    res.send("Welcome to Facebook")
 })

export default app;