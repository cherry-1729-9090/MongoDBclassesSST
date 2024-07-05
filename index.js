const express = require('express');
const mongoose = require('mongoose');
mongoose
    .connect("mongodb+srv://chitluridevicharan:1Ev4GXGXac8SsyCR@cluster0.qgrpql7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log("Error connecting to MongoDB", err);
    });

    const productSchema = new mongoose.Schema({
        product_name : {
            type : String,
            required : true
        },
        product_price :{
            type : String,
            required : true
        },

        product_description : {
            type : String,
            required : true
        },
        inStock : {
            type : Boolean,
            required : true
        },

        category : {
            type : String,
            required : true
        }

    });

const app = express();

app.listen(8006,()=>{
    console.log('Server is running on port 8006')
})


