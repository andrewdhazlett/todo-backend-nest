import { Body, Delete, Get, Post, Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return this.appService.findAll();
  }

  @Post()
  create(@Body() todo) {
    return this.appService.create(todo);
  }

  @Delete()
  deleteAll() {
    return this.appService.deleteAll();
  }
}
