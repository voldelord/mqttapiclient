import {
  Controller,
  Post,
  Put,
  Get,
  Param,
  Delete,
  Body,
  Query,
  HttpException,
  HttpStatus,
  OnModuleDestroy,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';
import { MqttSubscribeService } from '../mqtt-subscribe/mqtt-subscribe.service';

@Controller('topics')
export class TopicsController implements OnModuleDestroy {
  constructor(
    private readonly topicsService: TopicsService,
    private readonly usersService: UsersService,
    private readonly mqttSubscribeService: MqttSubscribeService,
  ) {}

  async onModuleDestroy() {
    this.mqttSubscribeService.close();
  }

  @Post(':userId')
  async createTopic(
    @Param('userId') userId: number,
    @Body() createTopicDto: CreateTopicDto,
  ) {
    try {
      const user = await this.usersService.getUser(userId);
      if (!(user instanceof User)) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      const topic = await this.topicsService.createTopic(user, createTopicDto);

      this.mqttSubscribeService.subscribe(topic.topicName);

      return topic;
    } catch (error) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
  }

  @Put(':id')
  async updateTopic(
    @Param('id') id: number,
    @Body() updateTopicDto: UpdateTopicDto,
  ) {
    return this.topicsService.updateTopic(id, updateTopicDto);
  }

  @Get()
  async getAllTopics() {
    return this.topicsService.getAllTopics();
  }

  @Get(':id')
  async getTopicById(@Param('id') id: number) {
    return this.topicsService.getTopicById(id);
  }

  @Get('byValue')
  async getTopicByValue(@Query('value') value: number) {
    return this.topicsService.getTopicByValue(value);
  }

  @Delete(':id')
  async deleteTopic(@Param('id') id: number) {
    return this.topicsService.deleteTopic(id);
  }
}
