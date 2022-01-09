const express = require("express")
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const mongoose = require('mongoose')
require('dotenv').config()
mongoose.connect(process.env.MONGODB)
.then(res=>{
    console.log("connection successsfull")
})
.catch(err=>{
    console.log(err)
})

const userRouter = require('./router/userRouter')

const app = express()
app.use(cors())
app.use(bodyParser.json())
app.use('/api/user',userRouter)



app.listen(3002,()=>{
    console.log("server started on 3002")
})