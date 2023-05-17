const Todo = require("../models/Todo");

// define the route handler

exports.getTodoById = async(req,res)=>{
    try{
// extract todo items from database on basis of ID
const id = req.params.id;
const todo = await Todo.findById({_id:id})

// data forgiven id not found
if(!todo){
    return res.status(404).json({
        success:false,
        message:"No Data Found woth  Given Id"
    })
}
// data for given id Found
res.status(200).json({
    success:true,
    data:todo,
    message:`Todo ${id} data successfully fetched`,
})
    }
    catch(err){
        console.err(err);
res.status(500)
.json({
    success:false,
    error:err.message,
    message:"Server Error",
})
    }
}