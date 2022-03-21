// Require mongoose to create datbase schema
const mongoose=require("mongoose");
// create database schema field to store data
const productSchema=new mongoose.Schema({
   
    name:{
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})

const Product=new mongoose.model('Product',productSchema);

module.exports=Product;