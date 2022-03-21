const mongoose=require("mongoose")

mongoose.connect("mongodb+srv://pradeep:pradeep@cluster0.4a6pc.mongodb.net/API?retryWrites=true&w=majority",{
    
    useNewUrlParser:true,
    useUnifiedTopology:true,
    
}).then(()=>{
    console.log("connection established")
}).catch((e)=>{
    console.log(e);
})
