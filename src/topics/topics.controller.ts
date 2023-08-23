// topics.controller.ts
import {
  Controller,
  Post,
  Put,
  Get,
  Param,
  Delete,
  Body,
  Query,
} from '@nestjs/common';
import { TopicsService } from './topics.service';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Controller('topics')
export class TopicsController {
  constructor(private readonly topicsService: TopicsService) {}

  @Post()
  async createTopic(@Body() createTopicDto: CreateTopicDto) {
    return this.topicsService.createTopic(createTopicDto);
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
