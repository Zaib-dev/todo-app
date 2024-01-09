const express = require('express');
const app = express();


// Define a route
app.get('/', (req, res) => {
  res.send('Hello, World');
});

app.get('/user', (req, res) => {
  res.send('Hello, user1');
});

app.get('/admin', (req, res) => {
  res.send('Hello, admin');
});

// Start the server
port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
