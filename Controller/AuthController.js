const Info=require('../models/auth')

exports.Showlogin=(req,res,next)=>{
    res.render('Auth/login')
}
exports.login=async(req,res,next)=>{
    try{
        const{Email,Password}=req.body
        const user= await Info.findOne({Email,Password})
        if(user){
            res.render('Display/fp')
        }else{
            res.send("Wrong Data Entered")
        }
    }catch(err){
        console.log('An Error Occured',err);
    }
}

exports.showSignup=(req,res,next)=>{
    res.render('Auth/signup')
}

exports.Signup=async(req,res,next)=>{
    const{Email,Password}=req.body
    try{
        const euser= await Info.findOne({Email,Password})
        if(euser){
            res.send('User Allready Registered Please Login')
        }else{
            const Nuser=new Info(req.body)
            await Nuser.save()
            res.redirect('/login')
        }
    }catch(err){
        console.log(err);
    }
}