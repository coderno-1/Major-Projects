const express= require("express");
const app = express();
const mongoose =require("mongoose");
const Listing=require("../Major-Projects/models/listing.js");
const path= require("path");
const methodOverirde= require("method-override");
const ejsMate= require("ejs-mate");



app.set("views engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));
app.use(methodOverirde ("_method"));
app.engine('ejs', ejsMate);
app.use(express.static(path.join(__dirname,"/public")));




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

//New route / Create new
app.get("/listings/new",(req,res)=>{
  res.render("listings/new.ejs");
});

//Show Route
app.get("/listings/:id",async (req,res)=>{
  let{id}=req.params;
  const listing=await Listing.findById(id);
  res.render("listings/show.ejs",{listing});
});

//Create Route
app.post("/listings",async (req,res)=>{
  const listing=req.body.listing;
  const newListing= new Listing(listing);
  await newListing.save();
  res.redirect("/listings");
});
 

//Edit Route
app.get("/listings/:id/edit",async (req,res)=>{
  let{id}=req.params;
  const listing=await Listing.findById(id);
  res.render("listings/edit.ejs",{listing});
});

//Update Route
app.put("/listings/:id",async (req,res)=>{
  let{id}=req.params;
  await Listing.findByIdAndUpdate(id,{...req.body.listing});
  res.redirect(`/listings/${id}`);
});

//Delete Route
app.delete("/listings/:id", async (req,res)=>{
  let{id}=req.params;
  id = id.trim();
  await Listing.findByIdAndDelete( id );
  res.redirect("/listings");
});

app.listen(8080,()=>{
    console.log("Server is listening to port 8080");
});