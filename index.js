const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/products.model.js')
const app = express()

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello from node API updated");
});

app.get('/api/products', async (req, res) => {
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

app.get('/api/products/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
app.post('/api/products', async (req, res) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
mongoose.connect("mongodb://localhost:27017/testing")
    .then(() => {
        console.log("Connected to database!")
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });

    })
    .catch(() => {
        console.log("Error connecting to database!")
    })