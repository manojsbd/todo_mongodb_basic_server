import Todo from '../model/Todo.js';


export const getTodo = async(req,res)=>{
    try{
        const list = await Todo.find()
        return res.status(200).json(list)
    }
    catch{
        console.log("Error")
    }
}


export const postTodo = async(req,res)=>{
    try{
        // const list = await Todo.find()
        // return res.status(200).json(list)
        console.log(req.body);
    }
    catch{
        console.log("Error")
    }
}