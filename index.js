const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose
  .connect("mongodb+srv://chitluridevicharan:1Ev4GXGXac8SsyCR@cluster0.qgrpql7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true
  },
  product_price: {
    type: String,
    required: true
  },
  product_description: {
    type: String,
    required: true
  },
  inStock: {
    type: Boolean,
    required: true
  },
  category: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

// adding a product
app.use(express.json());

app.post('/api/products', async (req, res) => {
  const body = req.body;

  const product = await Product.create({
    product_name: body.product_name,
    product_price: body.product_price,
    product_description: body.product_description,
    inStock: body.inStock,
    category: body.category
  });

  console.log(product);
  return res.status(201).json({ message: "Product added successfully", product });
  
});

app.listen(8006, () => {
  console.log('Server is running on port 8006');
});
