const express=require('express')
const fp=express()

fp.get('/',(req,res,next)=>{
    res.render('fp')
})


module.exports=fp