import express from 'express';

const app = express();

app.get('/health-check', (req, res) => {
  res.send('OK, the server is running!');
});

app.get('/my-api', (req, res) => {
  res.send("This API is Alex's!");
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});