// devices.service.ts
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Device } from './entities/device.entity';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Injectable()
export class DevicesService {
  constructor(
    @InjectRepository(Device) private deviceRepository: Repository<Device>,
  ) {}

  async createDevice(deviceDto: CreateDeviceDto) {
    const newDevice = this.deviceRepository.create(deviceDto);
    return this.deviceRepository.save(newDevice);
  }

  async updateDevice(id: number, deviceDto: UpdateDeviceDto) {
    const device = await this.deviceRepository.findOne({
      where: {
        id,
      },
    });

    if (!device) {
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    }

    if (deviceDto.name) {
      device.name = deviceDto.name;
    }
    if (deviceDto.description) {
      device.description = deviceDto.description;
    }

    return this.deviceRepository.save(device);
  }

  async getAllDevices() {
    return this.deviceRepository.find();
  }

  async getDeviceById(id: number) {
    const device = await this.deviceRepository.findOne({
      where: {
        id,
      },
    });
    if (!device) {
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    }
    return device;
  }

  async deleteDevice(id: number) {
    const deleteResult = await this.deviceRepository.delete(id);
    if (deleteResult.affected === 0) {
      throw new HttpException('Device not found', HttpStatus.NOT_FOUND);
    }
    return deleteResult;
  }
}
