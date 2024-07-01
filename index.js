const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')


const app = express()
app.use(cors())

const PORT = process.env.PORT || 8080


//schema
const schemaData = mongoose.Schema({
    name:String,
    email:String,
    password:String,
    reEnterPassword:String

},{
    timeStamps : true
})

const userModal = mongoose.model("user",schemaData)



//Read
app.get("/",async(req,res)=>{
    const data = await userModal.find({})
    res.json({success:"true",data:data})

})


//create data // save data
app.post("/create",(req,res) =>{
    console.log(req.body)

    res.send({success:true,message:"data save successfully"})

})


mongoose.connect("mongodb://localhost:27017/BillSystem")
.then(()=>
    {
        console.log("connect to db")
        app.listen(PORT,()=>console.log("server is running"))
    })
.catch((err)=>console.log(err))

