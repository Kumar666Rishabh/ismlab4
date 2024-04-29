const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let storedComment = ''; // Variable to store user input

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/store', (req, res) => {
  const userInput = req.body.comment;
  // Simulate storing user input in a variable (insecure for educational purposes)
  storedComment = userInput;
  res.redirect('/');
});

app.get('/comments', (req, res) => {
  res.send(storedComment);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
