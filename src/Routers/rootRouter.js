const express = require('express')
const rootRouter = express.Router();
const userRouter = require("../Routers/userRouter")
rootRouter.use('/user',userRouter)
module.exports=rootRouter