import { Injectable } from '@nestjs/common';
import { CreateTemperatureHistoryDto } from './dto/create-temperature_history.dto';
import { UpdateTemperatureHistoryDto } from './dto/update-temperature_history.dto';

@Injectable()
export class TemperatureHistoryService {
  create(createTemperatureHistoryDto: CreateTemperatureHistoryDto) {
    return 'This action adds a new temperatureHistory';
  }

  findAll() {
    return `This action returns all temperatureHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} temperatureHistory`;
  }

  update(id: number, updateTemperatureHistoryDto: UpdateTemperatureHistoryDto) {
    return `This action updates a #${id} temperatureHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} temperatureHistory`;
  }
}
