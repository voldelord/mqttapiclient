import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceModesService } from './device_modes.service';
import { CreateDeviceModeDto } from './dto/create-device_mode.dto';
import { UpdateDeviceModeDto } from './dto/update-device_mode.dto';

@Controller('device-modes')
export class DeviceModesController {
  constructor(private readonly deviceModesService: DeviceModesService) {}

  @Post()
  create(@Body() createDeviceModeDto: CreateDeviceModeDto) {
    return this.deviceModesService.create(createDeviceModeDto);
  }

  @Get()
  findAll() {
    return this.deviceModesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceModesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceModeDto: UpdateDeviceModeDto) {
    return this.deviceModesService.update(+id, updateDeviceModeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceModesService.remove(+id);
  }
}
