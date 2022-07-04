const express= require('express');
const cors=require("cors");
const bodyParser=require("body-parser")
const ProductRoutes=require('./routes/productsRoutes');
const UserRoutes=require('./routes/UserRoutes');
const AdminRoutes=require('./routes/adminRoutes')
const app=express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))


app.use('/product',ProductRoutes)
app.use('/user',UserRoutes)
app.use('/admin',AdminRoutes)


module.exports=app