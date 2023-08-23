// topics.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Topic } from './entities/topic.entity';
import { TopicsService } from './topics.service';
import { TopicsController } from './topics.controller';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Topic]), UsersModule],
  controllers: [TopicsController],
  providers: [TopicsService],
})
export class TopicsModule {}
