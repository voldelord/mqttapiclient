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
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { UsersService } from '../users/users.service';
import { User } from '../users/entities/user.entity';

@Controller('topics')
export class TopicsController {
  constructor(
    private readonly topicsService: TopicsService,
    private readonly usersService: UsersService,
  ) {}

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
      return this.topicsService.createTopic(user, createTopicDto);
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
