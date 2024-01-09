const express = require('express');
const app = express();


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World112');
});

app.get('/user', (req, res) => {
  res.send('Hello, user23');
});

app.get('/admin', (req, res) => {
  res.send('Hello, admin2');
});

// Start the server
port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
