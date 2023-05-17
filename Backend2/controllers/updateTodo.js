// import the model
const Todo = require("../models/Todo");

// define routes
exports.updateTodo = async(req,resp)=>{
    try{
//  2nd way to extract ID
const {id} = req.params;
const {title,description} = req.body;

const todo = await Todo.findByIdAndUpdate(
    {_id:id},
    {title,description,updatedAt: Date.now()},
)
console.log(todo)
resp.status(200).json({
    success:true,
    data:todo,
    message:'Updated Successfully'
}) 
} 
catch(err){
    console.error(err);
    resp.status(500)
    .json({
        success:false,
        error:err.message,
        message:"Server Error",
    });
}
} 
