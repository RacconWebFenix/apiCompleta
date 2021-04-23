//imports 
import express from "express";
import mongoose from "mongoose";
import { studentRouter } from "./routes/studentRouter.js";
import dotenv from 'dotenv';

dotenv.config()

process.env.USERDB;
process.env.PWDDB;

//conexxão com do mongoose com momgo db
const con = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://"+ process.env.USERDB +':'+ process.env.PWDDB + "@bootcampigti.gdpcx.mongodb.net/grades?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Conectado com sucesso.");
  } catch (error) {
    console.log("Erro ao conectar ao banco: " + error);
  }
};

con();

const app = express();

app.use(express.json());
app.use(studentRouter);

app.listen(process.env.PORT, () => console.log("API START"));
