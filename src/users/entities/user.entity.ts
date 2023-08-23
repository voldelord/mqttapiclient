import { Topic } from 'src/topics/entities/topic.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @Column()
  email: string;

  @Column()
  lastname: string;

  @Column()
  phone: number;
  @OneToMany(() => Topic, (topic) => topic.user)
  topics: Topic[];
}
