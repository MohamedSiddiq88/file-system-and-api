//impot fs , express and path
const fs=require("fs");
const express=require("express");
const path=require("path");


//intialize the express
const app=express();

app.get("/",(req,res)=>{
    res.send(`welcome`);
})

app.get("/date-time",(req,res)=>{
    res.send(`susccess`);
})

//listen to the server
app.listen(8000,()=>console.log("woriking"));

//create new content
const date=new Date();
const dateString=date.toUTCString().slice(0,-3);
const cleanDate=dateString.replace(/[,:]/g, " ")
const newContent=`TimeStamp : ${cleanDate}`;

//pathname
const pathname=path.join("./dateTime",`${cleanDate}.txt`);

//create new file 
fs.writeFile(pathname,newContent,(error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("success");
    }
})

