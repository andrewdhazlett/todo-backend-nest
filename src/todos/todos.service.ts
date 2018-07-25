import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo) private readonly todos: Repository<Todo>
  ) {}

  findAll(): Promise<Todo[]> {
    return this.todos.find();
  }

  find(id): Promise<Todo> {
    return this.todos.findOne(id);
  }

  async create(todo, { host, path }): Promise<Todo> {
    const newTodo = await this.todos.create(todo);
    const { id } = await this.todos.save(newTodo);
    const url = `https://${host}${path}${id}`;
    Object.assign(newTodo, { url });
    return this.todos.save(newTodo);
  }

  async update(id, update): Promise<Todo | void> {
    const todo = await this.todos.findOne(id);
    if (todo != null) {
      Object.assign(todo, update);
      return this.todos.save(todo);
    }
  }

  async deleteAll(): Promise<Todo[]> {
    await this.todos.delete({});
    return this.todos.find();
  }

  async delete(id): Promise<Todo[]> {
    await this.todos.delete({ id });
    return this.todos.find();
  }
}
