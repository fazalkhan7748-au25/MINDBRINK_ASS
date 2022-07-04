const { urlencoded } = require('body-parser')
const mongoose = require('mongoose')
const gender =new mongoose.Schema({


Date:{
    type:Number,
    required:true

},
Location:{
    type:String,
    teruired:true
},
AudioUrl:{
    type:String,
    reuired:true
},

AudioDuration:{
    type:Number,
    required:true 
}, 

OfflineMode:{
    type:String,
    required:true
},
SurveyorName:{
    type:String,
    required:true

},
SurveyorNumber:{
    type:Number,
    required:true

},
Name:{
    type:String,
    required:true

},
Male:{
    type:Boolean,
    required:true

},
Female:{
    type:Boolean,
    required:true

},



 
    
})
const NewGender=mongoose.model('NewGender',gender)
module.exports=NewGender