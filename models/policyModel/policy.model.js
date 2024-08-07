const {mongoose} = require('mongoose');

 const policySchema = new mongoose.Schema({
  
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },    
},{timestamps:true})


const Policy = mongoose.model('Policy', policySchema);
 module.exports = Policy;
