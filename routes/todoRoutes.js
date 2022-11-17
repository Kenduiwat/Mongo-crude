
const router = require('express').Router();

const controller = require('../controllers/todoController')

router.get('/', controller.getAllTodos);
router.post('/create', controller.createTodo);
router.get('/:id', controller.getTodoById);
router.post('/:id/update', controller.updateTodo);
router.post('/:id/delete', controller.deleteTodo);

module.exports = router;
