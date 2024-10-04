const Admin = require('../../models/adminModel/Admin.model')
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');



const loginAdmin = async(req,res)=>{
const{username,password}= req.body;

const admin = await Admin.findOne(username,password)

if (!admin) 
  {
    return res.status(400).json({ message: 'Invalid credentials'});}
    res.json({
    message: 'Logged in successfully!',
     });
}
    
    
     
      module.exports = {loginAdmin};