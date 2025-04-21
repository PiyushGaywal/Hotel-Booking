const express=require('express')
const path=require('path')
const review=express()

review.use('/reviews',(req,res,next)=>{
    res.render('Display/reviews')
})




module.exports=review