const Todo = require("../models/todo.model");

const createTodo= async(requestAnimationFrame,res)=>{
    try{
        const todo= await Todo.creste(requestAnimationFrame.body);

    }catch(error){
        res.status(500).json({error:error.massage});
    }
}

const getTodo= async(requestAnimationFrame,res)=>{
    try{
        const todo= await Todo.creste(requestAnimationFrame.body);

    }catch(error){
        res.status(200).json({error:error.massage});
    }
}

module.exports ={createTodo, getTodo};