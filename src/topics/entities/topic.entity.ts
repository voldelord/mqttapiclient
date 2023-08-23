// topic.entity.ts
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

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
  @ManyToOne(() => User, (user) => user.topics)
  user: User;
}
