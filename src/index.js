import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import "@babel/polyfill";

import userRouter from './routers/userRouter';
import loginRouter from './routers/loginRouter';
import productRouter from './routers/ProductRouter';
import orderRouter from './routers/orderRouter'

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/products', productRouter);
app.use('/order', orderRouter )

app.listen(3000, () => console.log('Listening on port 3000!'));
