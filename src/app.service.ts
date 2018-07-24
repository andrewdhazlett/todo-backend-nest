import * as uuid from 'uuid';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    this.todos = [];
  }

  findAll() {
    return this.todos;
  }

  find(id) {
    return this.todos.find(todo => todo.id === id);
  }

  create(todo, { host, path }) {
    const id = uuid.v4();
    const url = `https://${host}${path}${id}`;
    const newTodo = Object.assign({ id, url, completed: false }, todo);
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id, update) {
    const todo = this.find(id);
    if (todo != null) {
      return Object.assign(todo, update);
    }
  }

  deleteAll() {
    while (this.todos.length > 0) this.todos.shift();
    return this.todos;
  }
}
