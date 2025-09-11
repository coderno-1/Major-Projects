// const mongoose =require("mongoose");
// const Schema=mongoose.Schema;

// const listingSchema= new Schema({
//     title:{
//         type: String,
//         required:true,
//     } ,
//     description: String,
//     image:{
//         type:String,
//         default:"https://wallpaperaccess.com/full/505152.jpg",
//         set:(v) => v === "" ? "https://wallpaperaccess.com/full/505152.jpg" : v,
//     },
//     price:Number,
//     country:String,
// });

// const Listing= mongoose.model("Listing",listingSchema);
 
// module.exports=Listing;
const mongoose = require("mongoose");

const listingSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: {
    filename: String,
    url: String,
  },
  price: Number,
  location: String,
  country: String,
});

// module.exports = mongoose.model("Listing", listingSchema);
 const Listing= mongoose.model("Listing",listingSchema);
module.exports=Listing;