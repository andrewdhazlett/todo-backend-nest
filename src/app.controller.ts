import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
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

  @Delete()
  deleteAll() {
    return this.appService.deleteAll();
  }
}
