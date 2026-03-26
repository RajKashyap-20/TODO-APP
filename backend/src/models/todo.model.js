const mongoose = require("mongooes")

const TodoSchema= new mongoose.TodoSchema({
    title:{
        type : String,
        require: true,
    },
    description:{
        type : String,
        require: true,
    }
},
{
    timestamps: true,
})
module.exports= mongoose.model("Todo",TodoSchema)
