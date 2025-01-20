const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;  // If there is an env var use it, otherwise use 3000

app.use(cors());
app.use(bodyParser.json());

// Will use local memory to simulate db
let users = [];

// Register
app.post('/api/register', (req, res) => {
  const email = req.body.email
  const password = req.body.password
//   const { username, email, password } = req.body; // to delete if works
  if (!email || !password) {
    return res.status(400).json({ message: 'Missing params' });
  }

  // Check if user already exists by email as UID
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'Email is already registered' });
  }

  // Add user
  users.push({ username, email, password });
  return res.status(201).json({ message: 'User registered successfully' }); // 201 means new resource is created successfully
});

// Login endpoint
app.post('/api/login', (req, res) => {
  const email = req.body.email
  const password = req.body.password
  //const { email, password } = req.body; // to delete later
  const user = users.find(user => user.email === email && user.password === password);

  if (!user) {
    return res.status(400).json({ message: 'Email or password is invalid credentials' });
  }

  return res.status(200).json({ message: 'Login successful' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

// https://raygun.com/learn/javascript-debugging-tips - cool debugging tricks