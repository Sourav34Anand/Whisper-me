//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming
import express from "express";
import bodyParser from "body-parser";
import {dirname} from "path";
import { fileURLToPath } from "url";
const abc = express();
var port= 3000;
var User = false;
var __dirname = dirname(fileURLToPath(import.meta.url));
abc.use(bodyParser.urlencoded({ extended:true }))

function Secx(req,res,next){
    if(req.body["password"] == "ILoveProgramming"){
        User = true;
    }
    next();
}

abc.use(Secx);
abc.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
})

abc.post("/check",(req,res)=>{
    if(User){
        res.sendFile(__dirname + "/public/secret.html");
    }
    
})

abc.listen(port,()=>{
    console.log("Listening to port 3000");
})