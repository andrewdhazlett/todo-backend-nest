import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { TodosModule } from './todos/todos.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'andrew',
      password: '',
      database: 'todo_backend',
      entities: [`${__dirname}/**/*.entity.*`],
      migrations: [`${__dirname}/**/*.migration.*`]
    }),
    TodosModule
  ]
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
