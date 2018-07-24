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
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { TodosService } from './todos.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { Todo } from './dto/todo.dto';

@ApiUseTags('todos')
@Controller()
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  @ApiResponse({
    status: 200,
    type: Todo,
    isArray: true
  })
  findAll() {
    return this.todosService.findAll();
  }

  @Get(':id')
  @ApiResponse({ status: 200, type: Todo })
  find(@Param('id') id) {
    return this.todosService.find(id);
  }

  @Post()
  @ApiOperation({ title: 'Create Todo' })
  @ApiResponse({ status: 201, type: Todo })
  create(@Body() todo: CreateTodoDto, @Request() req) {
    return this.todosService.create(todo, {
      host: req.hostname,
      path: req.path
    });
  }

  @Patch(':id')
  @ApiOperation({ title: 'Update Todo' })
  @ApiResponse({ status: 201, type: Todo })
  update(@Param('id') id, @Body() update: UpdateTodoDto) {
    return this.todosService.update(id, update);
  }

  @Delete()
  @ApiOperation({ title: 'Delete Todos' })
  @ApiResponse({
    status: 200,
    type: Todo,
    isArray: true
  })
  deleteAll() {
    return this.todosService.deleteAll();
  }

  @Delete(':id')
  @ApiOperation({ title: 'Delete Todo' })
  @ApiResponse({
    status: 200,
    type: Todo,
    isArray: true
  })
  delete(@Param('id') id) {
    return this.todosService.delete(id);
  }
}
