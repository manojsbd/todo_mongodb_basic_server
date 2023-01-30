import express from 'express';
import { getTodo, postTodo } from '../controller/todoListController.js';


const route = express.Router();

route.get("/", getTodo)
route.post("/",postTodo)

export default route;