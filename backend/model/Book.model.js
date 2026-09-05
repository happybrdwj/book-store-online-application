import mongoose from "mongoose";

const Bookschema = mongoose.Schema({
    name : String,
    title: String,
    price : Number,
    category: String,
    image:String
})

const book = mongoose.model("Book", Bookschema);

export default book;