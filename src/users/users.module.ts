// users.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Topic } from '../topics/entities/topic.entity';
import { TopicsService } from '../topics/topics.service';
@Module({
  imports: [TypeOrmModule.forFeature([User, Topic])],
  controllers: [UsersController],
  providers: [UsersService, TopicsService],
  exports: [UsersService],
})
export class UsersModule {}
