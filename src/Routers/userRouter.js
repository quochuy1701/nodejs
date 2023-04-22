const express=require('express')
const userRouter= express.Router()
const {getInfor,createLike,deletelike,createrate,getInforrate,createoder} = require('../Controller/userController')
userRouter.get("/get-Infor" ,getInfor)
userRouter.post("/create-like",createLike)
userRouter.delete("/delete-like",deletelike)
userRouter.post("/create-rate",createrate)
userRouter.get("/get-Inforrate" ,getInforrate)
userRouter.post("/create-order",createoder)




module.exports=userRouter