const {mongoose} = require('mongoose');

//--------------------- addressSchema

const addressSchema = new mongoose.Schema({
    house:{
        type:String,
        required: true,
          },
    pincode:{
        type:String,
        required: true,
         },
    city:{
        type:String,
        required: true,
       },
    country:{
        type:String,
        required: true,
         },
    status:{
        type:Boolean,
        default:'true',
          },},
    {timestamps:true})

// ------------ Karigar Schema

 const karigarSchema = new mongoose.Schema({
    avatar:{
        type:String,
        default:'avatar.png'
    },
    name:{
        type:String,
        uppercase:true,
    },
    phonenumber:{
        type:String,
        required: true,
    },
    order:{
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Order',
    },
    category:{
         type:mongoose.Schema.Types.ObjectId,
         ref: 'Category',
    },
    address:{
        type:[addressSchema],
    },  
    otp:{
        type:String,
        default: null,
    },
    status:{
        type:Boolean,
        default:'true',
     },},
    {timestamps:true})


const Karigar = mongoose.model('Karigar', karigarSchema);
 module.exports = Karigar;
