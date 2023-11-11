// homes.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Home } from './entities/home.entity';
import { CreateHomeDto, UpdateHomeDto } from './dto/home.dto';

@Injectable()
export class HomesService {
  constructor(
    @InjectRepository(Home) private homeRepository: Repository<Home>,
  ) {}

  async createHome(homeDto: CreateHomeDto) {
    const newHome = this.homeRepository.create(homeDto);
    return this.homeRepository.save(newHome);
  }

  async updateHome(id: number, homeDto: UpdateHomeDto) {
    const home = await this.homeRepository.findOne(id);

    if (!home) {
      throw new HttpException('Home not found', HttpStatus.NOT_FOUND);
    }

    Object.assign(home, homeDto);

    return this.homeRepository.save(home);
  }

  async getAllHomes() {
    return this.homeRepository.find();
  }

  async getHomeById(id: number) {
    const home = await this.homeRepository.findOne(id);

    if (!home) {
      throw new HttpException('Home not found', HttpStatus.NOT_FOUND);
    }

    return home;
  }

  async deleteHome(id: number) {
    const deleteResult = await this.homeRepository.delete(id);

    if (deleteResult.affected === 0) {
      throw new HttpException('Home not found', HttpStatus.NOT_FOUND);
    }

    return deleteResult;
  }
}
