import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor() {
    this.todos = [];
  }

  findAll(): string {
    return this.todos;
  }

  create(todo) {
    this.todos.push(todo);
    return todo;
  }

  deleteAll() {
    while (this.todos.length > 0) this.todos.shift();
    return this.todos;
  }
}
