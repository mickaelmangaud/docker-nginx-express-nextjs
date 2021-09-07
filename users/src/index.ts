import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('*', (req, res, next) => {
  res.send('hello from API !!!');
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}!!!`));
