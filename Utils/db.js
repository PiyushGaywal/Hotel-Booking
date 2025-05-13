const mongoose=require('mongoose')
const Url="mongodb://localhost:27017/"
const db=mongoose.connect(Url).
then(()=>{console.log('Connect To Database Success');
})
.catch((err)=>{console.log("An Error Occured",err);
})
module.exports=db