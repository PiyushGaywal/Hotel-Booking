const express=require('express')
const router=express.Router()
const Auth=require('../Controller/AuthController')

router.get('/login',Auth.Showlogin)
router.post('/login',Auth.login)
router.get('/signup',Auth.showSignup)
router.post('/signup',Auth.Signup)



module.exports=router