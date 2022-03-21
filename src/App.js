const express=require("express");
require("./db/conn")
const Product=require("./models/product")
const app=express();
const port=process.env.PORT || 3000;

app.use(express.json())
app.get("/products",async(req,res)=>{
    try{
        const data=await Product.find();
        res.send(data);
    }catch(e){
        res.send(e)
    }
})
app.post("/products/create", async(req,res)=>{
    console.log(req.body);
   const data=new Product(req.body);
   data.save().then(()=>{
       res.status(201).send(data);
   }).catch((e)=>{
       res.status(400).send(e);
   })
 
})
app.delete("/products/:id",async(req,res)=>{
   
    const id=req.params.id;
    console.log(id);
    try{
   const delData=await Product.findByIdAndDelete(id);
   if(!id)
   {
       return res.status(400).send();
   }
   res.send(`Deleted data : ${delData}`);
    }
    catch(e){
     res.status(500).send(e);
    }
})
app.patch("/products/:id",async(req,res)=>{
    try{
       const _id=req.params.id;
       
       const updateData=await Product.findByIdAndUpdate(_id,req.body,{
        new:true
       })
       res.send(updateData)
    }
    catch(e){
        res.status(404).send(e);
    }
})



app.listen(port,()=>{
    console.log(`Connection is Successful at port : ${port}`);
})