const express=require('express')
path=require('path')
const app=express()


const fp=require('./Routes/Displauroutes/welcome')
const bookp=require('./Routes/Displauroutes/book')
const hi=require('./Routes/Displauroutes/hotel')
const end=require('./Routes/Displauroutes/end')
const contact=require('./Routes/Displauroutes/contact')
const review=require('./Routes/Displauroutes/review')
const db=require('./Utils/db')
const bodyParser = require('body-parser');
const Auth=require('./Routes/AuthRoutes')
require('dotenv').config();




app.use(express.static(path.join(__dirname,'public')))
app.set('view engine','ejs')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



app.use(fp)
app.use(bookp)
app.use(hi)
app.use(end)
app.use(contact)
app.use(review)
app.use(Auth)

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

