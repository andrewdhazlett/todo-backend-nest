import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';
import { Todo } from './dto/todo.dto';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];

  findAll(): Todos[] {
    return this.todos;
  }

  find(id): Todo {
    return this.todos.find(todo => todo.id === id);
  }

  create(todo, { host, path }): Todo {
    const id = uuid.v4();
    const url = `https://${host}${path}${id}`;
    const newTodo = Object.assign({ id, url, completed: false }, todo);
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id, update): Todo {
    const todo = this.find(id);
    if (todo != null) {
      return Object.assign(todo, update);
    }
  }

  deleteAll(): Todo[] {
    while (this.todos.length > 0) this.todos.shift();
    return this.todos;
  }

  delete(id): Todo[] {
    this.todos = this.todos.filter(todo => todo.id !== id);
    return this.todos;
  }
}
