import mongoose, { Schema } from "mongoose"; 

const todoSchema =  new Schema({
    task:{
        type: String,
        trim: true
    }
})

const TodoModel = mongoose.model("todo", todoSchema);
export default TodoModel;