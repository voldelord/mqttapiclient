// devices.controller.ts
import {
  Controller,
  Post,
  Put,
  Get,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { DevicesService } from './devices.service';
import { CreateDeviceDto } from './dto/create-device.dto';
import { UpdateDeviceDto } from './dto/update-device.dto';

@Controller('devices')
export class DevicesController {
  constructor(private readonly devicesService: DevicesService) {}

  @Post()
  async createDevice(@Body() createDeviceDto: CreateDeviceDto) {
    return this.devicesService.createDevice(createDeviceDto);
  }

  @Put(':id')
  async updateDevice(
    @Param('id') id: number,
    @Body() updateDeviceDto: UpdateDeviceDto,
  ) {
    return this.devicesService.updateDevice(id, updateDeviceDto);
  }

  @Get()
  async getAllDevices() {
    return this.devicesService.getAllDevices();
  }

  @Get(':id')
  async getDeviceById(@Param('id') id: number) {
    return this.devicesService.getDeviceById(id);
  }

  @Delete(':id')
  async deleteDevice(@Param('id') id: number) {
    return this.devicesService.deleteDevice(id);
  }
}
