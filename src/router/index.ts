import express from 'express';
import TodoValidator from '../validator';
import Middleware from '../middleware';
import TodoController from '../controller/todo.controller';

const router = express.Router();

router.post(
	'/todo',
	TodoValidator.checkCreateTodo(),
	Middleware.handleValidationError,
	TodoController.create
);

router.get(
	'/todo',
	TodoValidator.checkReadTodo(),
	Middleware.handleValidationError,
	TodoController.readPagination
);

router.get(
	'/todo/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.readByID
);

router.put(
	'/todo/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.update
);

router.delete(
	'/todo/:id',
	TodoValidator.checkIdParam(),
	Middleware.handleValidationError,
	TodoController.delete
);

export default router;