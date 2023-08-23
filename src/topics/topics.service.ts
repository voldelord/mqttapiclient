// topics.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Topic } from './entities/topic.entity';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';

@Injectable()
export class TopicsService {
  constructor(
    @InjectRepository(Topic) private topicRepository: Repository<Topic>,
  ) {}

  async createTopic(topicDto: CreateTopicDto) {
    const newTopic = this.topicRepository.create(topicDto);
    return this.topicRepository.save(newTopic);
  }

  async updateTopic(id: number, topicDto: UpdateTopicDto) {
    const topic = await this.topicRepository.findOne({
      where: {
        id,
      },
    });

    if (!topic) {
      throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
    }

    if (topicDto.topicName) {
      topic.topicName = topicDto.topicName;
    }
    if (topicDto.description) {
      topic.description = topicDto.description;
    }
    if (topicDto.value !== undefined) {
      topic.value = topicDto.value;
    }

    return this.topicRepository.save(topic);
  }

  async getAllTopics() {
    return this.topicRepository.find();
  }

  async getTopicById(id: number) {
    const topic = await this.topicRepository.findOne({
      where: {
        id,
      },
    });
    if (!topic) {
      throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
    }
    return topic;
  }

  async getTopicByValue(value: number) {
    const topic = await this.topicRepository.findOne({
      where: {
        value,
      },
    });
    if (!topic) {
      throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
    }
    return topic;
  }

  async deleteTopic(id: number) {
    const deleteResult = await this.topicRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new HttpException('Topic not found', HttpStatus.NOT_FOUND);
    }
    return deleteResult;
  }
}
