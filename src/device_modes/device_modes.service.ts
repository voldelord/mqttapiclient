import { Injectable } from '@nestjs/common';
import { CreateDeviceModeDto } from './dto/create-device_mode.dto';
import { UpdateDeviceModeDto } from './dto/update-device_mode.dto';

@Injectable()
export class DeviceModesService {
  create(createDeviceModeDto: CreateDeviceModeDto) {
    return 'This action adds a new deviceMode';
  }

  findAll() {
    return `This action returns all deviceModes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deviceMode`;
  }

  update(id: number, updateDeviceModeDto: UpdateDeviceModeDto) {
    return `This action updates a #${id} deviceMode`;
  }

  remove(id: number) {
    return `This action removes a #${id} deviceMode`;
  }
}
