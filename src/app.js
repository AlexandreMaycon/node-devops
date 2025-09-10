import express from 'express';

const app = express();

app.get('/health-check', (req, res) => {
  res.send('OK, the server is running!');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});