import { Injectable } from '@nestjs/common';
import { CreateDeviceScenarioDto } from './dto/create-device_scenario.dto';
import { UpdateDeviceScenarioDto } from './dto/update-device_scenario.dto';

@Injectable()
export class DeviceScenariosService {
  create(createDeviceScenarioDto: CreateDeviceScenarioDto) {
    return 'This action adds a new deviceScenario';
  }

  findAll() {
    return `This action returns all deviceScenarios`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deviceScenario`;
  }

  update(id: number, updateDeviceScenarioDto: UpdateDeviceScenarioDto) {
    return `This action updates a #${id} deviceScenario`;
  }

  remove(id: number) {
    return `This action removes a #${id} deviceScenario`;
  }
}
