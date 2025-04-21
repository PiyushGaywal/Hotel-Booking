const express = require('express');
const hi = express();

const Info=require('../../models/info')

hi.post('/submit-booking',async(req, res, next) => {
    try{
        console.log(req.body);
        const NewPerson= new Info(req.body)
        await NewPerson.save()
        console.log("Person Saved Success");
        res.render('Display/hi')
    }catch(err){
        console.log(err);
    }
});
hi.get('/submit-booking', (req, res, next) => {
    res.render('Display/hii')
});
module.exports = hi;
