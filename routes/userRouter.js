const express = require('express')
const userRouter = express.Router()
const User = require('../models/users')
const verify = require('../middlewares/verify')



userRouter.get('/users', verify, async (req, res) => {
    try{
        res.json(req.user)
    }
    catch(err){
        res.json(err)
    }
})


module.exports = userRouter