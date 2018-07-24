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
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll() {
    return this.appService.findAll();
  }

  @Get(':id')
  find(@Param('id') id) {
    return this.appService.find(id);
  }

  @Post()
  create(@Body() todo, @Request() req) {
    return this.appService.create(todo, {
      host: req.hostname,
      path: req.path
    });
  }

  @Patch(':id')
  update(@Param('id') id, @Body() update) {
    return this.appService.update(id, update);
  }

  @Delete()
  deleteAll() {
    return this.appService.deleteAll();
  }

  @Delete(':id')
  delete(@Param('id') id) {
    return this.appService.delete(id);
  }
}
