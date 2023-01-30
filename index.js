import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import todolist from './routes/todolist.js'
import connection from './db.js';


const app =  express();
app.use(cors());
app.use(bodyParser.json());
app.use("/todo",todolist)


const PORT = 8000;
connection();
app.listen(PORT,()=>console.log("Sucessfully Connected",PORT));
