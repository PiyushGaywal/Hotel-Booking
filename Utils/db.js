const mongoose=require('mongoose')
const Url="mongodb+srv://Piyu1cbz:Piyu1cbz@mydatabase.bvhet.mongodb.net/?retryWrites=true&w=majority&appName=MyDatabase"
const db=mongoose.connect(Url).
then(()=>{console.log('Connect To Database Success');
})
.catch((err)=>{console.log("An Error Occured",err);
})
module.exports=db