const Todo = require("../models/Todo");

//define routes handler

exports.deleteTodo = async (req, res) => {
  try {
    // such way we find the ID
    const { id } = req.params;

    // console.log("delete todo line 10 of id",id)
    // await Todo.findByIdAndDelete({ _id: id });
    await Todo.findByIdAndRemove(id)

    res.status(200).json({
      success: true,
      message: "Todo Deleted",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      error: err.message,
      message: "Server Error",
    });
  }
};
