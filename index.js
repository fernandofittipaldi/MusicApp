import express from 'express';
import router from './routes/router.js';
//import { log } from './middlewares/log.js';
import morgan from 'morgan';
import connection from './connection/connection.js';
import { notFound } from './middlewares/404NotFound.js';
import { PORT } from './config/config.js';
import cors from 'cors';
import seed from './seed/seed.js';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
//app.use(log);
app.use(morgan('tiny'));

app.use(router);

app.use(notFound);

await connection.sync({ force: true });
await seed();

app.listen(PORT, () => {
  console.log(`Server listening http://localhost:${PORT}`);
});
app.on('error', (error) => {
  console.log(`Error: ${error}`)
});