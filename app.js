const express= require("express");
const app = express();
const mongoose =require("mongoose");
const Listing=require("../Major Projects/models/listing.js");
const path= require("path");



app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));



main()  
  .then(()=>{
    console.log("Mongo is connected")
  })
  .catch((err)=>{
    console.log(err);
  });

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/WonderHub");
}


app.get("/",(req,res)=>{
    res.send("Hi i am root");
});



// app.get("/testlisting",async (req,res)=>{
//     let sampleListing= new Listing({
//         title:"My villa",
//         description:"This is my private vila ",
//         price:19000,
//         country:"India",
//     })
//     await sampleListing.save(); 
//     console.log("Sample was saved");
//     res.send("Testing was sucessfully"); 
// });


//index Routing

app.get("/listings",async (req,res)=>{
 const allListing= await Listing.find({});
 res.render("listings/index.ejs",{allListing});

});

app.get("/listings/:id",async (req,res)=>{
  let{id}=req.params;
  const listing=await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
})
app.listen(8080,()=>{
    console.log("Server is listening tp port 8080");
});