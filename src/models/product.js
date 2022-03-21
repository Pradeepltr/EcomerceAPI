const mongoose=require("mongoose");
const validator=require("validator");

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