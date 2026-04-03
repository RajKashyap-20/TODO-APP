const Todo = require("../models/todo.model");

const createTodo= async(req,res)=>{
    try{
        const todo= await Todo.create(req.body);
        res.status(200).json({todo});

    }catch(error){
        res.status(500).json({error:error.message});
    }
}

const getTodos= async(req,res)=>{
    try{
        const todo= await Todo.find();
        res.status(200).json({todo});

    }catch(error){
        res.status(500).json({error:error.message});
    }
}

// ✅ UPDATE TODO
const updateTodo = async (req, res) => {
    try {
        const todo = await Todo.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        res.status(200).json({ todo });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ✅ DELETE TODO
const deleteTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Todo deleted successfully" });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports ={createTodo, getTodos, updateTodo, deleteTodo};