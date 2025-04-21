const express=require('express')
const end=express()
end.use('/end',(req,res,next)=>{
    res.render('Display/end')
})
module.exports=end