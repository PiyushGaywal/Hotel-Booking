const express=require('express')
const bookp=express()
bookp.use('/booking',(req,res,next)=>{
    res.render('book')
})

module.exports=bookp