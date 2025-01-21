const express = require('express');
const app = express();
const port = 5000;
const path = require('path');

app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/register', express.static(path.join(__dirname, 'public')));


app.use(function(req, res) {
    res.status(400);
    return res.send(`404 Error: Resource not found`);
  });

app.listen(port, () => {
  console.log(`App listening  on port ${port}`);
})