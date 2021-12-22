import dotenv from 'dotenv'
import express from 'express';
import startConnection from './database/connect.js';
import Router from './routes/postRoutes.js';
import cors from 'cors';
dotenv.config()
const app = express();

app.use(cors())
app.use(express.json({limit: '3mb'}));
app.use(express.urlencoded({extended:true,limit: '3mb'}));
app.use('/posts', Router);
app.get('/',(req,res)=>res.send("Welcome to POST API!"))
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
// eslint-disable-next-line no-undef
const MONGO_URI =process.env.MONGO ;

const start = async () => {
  try {
    await startConnection(MONGO_URI);
    app.listen(PORT, () =>
      console.log(`server is running at http://localhost:${PORT}`)
    );
  } catch (err) {
    console.log('Error while connecting to db', err);
  }
};

start();
