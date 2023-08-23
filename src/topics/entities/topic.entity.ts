// topic.entity.ts
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Topic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  topicName: string;

  @Column()
  description: string;

  @Column()
  value: number;
}
