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
    const{Email}=req.body
    try{
        const euser= await Info.findOne({Email})
        if(euser){
            res.send(`
    <script>
    alert("User Already Registered Please Login To Continue");
    window.location.href = "/login";
  </script>`)
        }else{
            const Nuser=new Info(req.body)
            await Nuser.save()
            res.redirect('/login')
        }
    }catch(err){
        console.log(err);
    }
}