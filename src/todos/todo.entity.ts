import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn() id: number;
  @Column({ nullable: true })
  url?: string;
  @Column() title: string;
  @Column() completed: boolean = false;
  @Column({ nullable: true })
  order?: number;
}
