

const Todo = require('../models/todoModel');

//create new todo
exports.createTodo = async (req, res) => {
  try{
    let newTodo = new Todo()
    const {title, description} = req.body;
    newTodo.title = title;
    newTodo.description = description;
    await newTodo.save((err, todo) => {
      if (err){
        console.log(err);
        res.status(500).json({
          message:"Failed to create todo"
        })
      } else {
        res.status(200).json({
          message: "todo created  successfully",
          todo: todo
        })
      }
    })
  } catch (err){
    res.status(500).json({
      message: err.message
    })
  }
}

//get all todos
exports.getAllTodos = async (req, res) => {
  try {
    await Todo.find().sort({createdAt : -1}).limit(5).exec((err, todos) => {
      if(err) {
        res.status(500).json({
          message: "No record found"
        })
      } else {
        res.status(200).json({
          message: "Here are all the todos",
          todos: todos
        })
      }
    })
  } catch (err){
    res.status(500).json({
      message: err.message
    })
  }
}

//get todo by _id
exports.getTodoById = async (req, res) => {
  try {
    let id = req.params.id;
    Todo.find({ _id:id }, (err, todo) => {
      if(err) {
        //console.log(err);
        res.status(500).json({
          message: "No record found"
        })
      } else {
        res.status(200).json({
          message: "Here is the todo",
          todo: todo
        })
      }
    })
  } catch (err){
    //console.log(err.message)
    res.status(500).json({
      message: err.message
    })
  }
}

//update todo
exports.updateTodo = async (req, res) => {
  try {
    let id = req.params.id;
    const {title, description} = req.body
    Todo.findByIdAndUpdate(id,{title:title,description:description},(err, todo) => {
      if (err){
        res.status(500).json({
          message: "todo not updated"
        })
      } else {
        res.status(200).json({
          message:"todo updated",
          todo:todo
        })
      }
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

//delete // TODO:
exports.deleteTodo = async(req, res) => {
  try {
    let id = req.params.id;
    Todo.findByIdAndDelete(id, (err, todo) => {
      if(err){
        res.status(500).json({
          message:"todo not deleted",
        })
      }else {
        res.status(200).json({
          message:"todo deleted successfully"
        })
      }
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}
