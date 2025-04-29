const express=require('express')
const bookp=express.Router()
const lmid=require('../../middleware/lmid')
bookp.get('/booking',lmid,(req,res,next)=>{
    res.render('book')
})

module.exports=bookp