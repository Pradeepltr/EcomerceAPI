const mongoose=require("mongoose")

mongoose.connect("mongodb://localhost:27017/products-api",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("connection established")
}).catch((e)=>{
    console.log(e);
})
