const express=require('express')
const contact=express()
contact.use('/contact',(req,res,next)=>{
    res.render('Display/contact')
})
module.exports=contact
