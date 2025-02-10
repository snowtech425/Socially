const express = require('express');
const app = express();
const port = 3000;

// Import routes
const productRoutes = require('./routes/productRoutes');

// Use routes
app.use('/products', productRoutes);

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});