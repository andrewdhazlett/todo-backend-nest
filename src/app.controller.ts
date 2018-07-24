import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Request
} from '@nestjs/common';
import { TodosService } from './todos/todos.service';

@Controller()
export class AppController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  find(@Param('id') id) {
    return this.todosService.find(id);
  }

  @Post()
  create(@Body() todo, @Request() req) {
    return this.todosService.create(todo, {
      host: req.hostname,
      path: req.path
    });
  }

  @Patch(':id')
  update(@Param('id') id, @Body() update) {
    return this.todosService.update(id, update);
  }

  @Delete()
  deleteAll() {
    return this.todosService.deleteAll();
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.todosService.delete(id);
  }
}
