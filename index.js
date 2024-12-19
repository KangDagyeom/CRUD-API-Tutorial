const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/products.model.js');
const productRoute = require('./routes/product.route.js');
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
    res.send("Hello from node API updated");
});

//Connection Promise
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