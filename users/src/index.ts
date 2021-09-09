import express, {Request, Response} from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get('*', (req: Request, res: Response) => {
  res.send('hello from user-service !!!');
});

app.listen(PORT, () => console.log(`API listening on port ${PORT}!!!`));
