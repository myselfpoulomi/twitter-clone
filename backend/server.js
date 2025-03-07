import express from "express";
import authRoutes from './routes/auth.routes.js'
const app = express();

app.get ("/" , (req,res)=>{
    res.send("server is ready");
})

app.use("/api/auth", authRoutes);

app.listen(8000 ,()=> {
    console.log("server is running");
    
})
