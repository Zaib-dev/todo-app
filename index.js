const express = require('express');
const app = express();


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});