const app=require('./app');
const PORT=3000||process.env.Port
const dotenv=require('dotenv');
const mongoose= require('mongoose');
dotenv.config({path:'./config.env'});

const DB =process.env.DATABASE

mongoose.connect(DB,{
    useUnifiedTopology:true,
    useCreateIndex:true,
    useNewUrlParser:true,
    useFindAndModify:false
}).then(()=>{
    console.log("database is connected")
})

app.listen(PORT,()=>{
    console.log("server is active");
})