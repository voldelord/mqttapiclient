import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceScenariosService } from './device_scenarios.service';
import { CreateDeviceScenarioDto } from './dto/create-device_scenario.dto';
import { UpdateDeviceScenarioDto } from './dto/update-device_scenario.dto';

@Controller('device-scenarios')
export class DeviceScenariosController {
  constructor(private readonly deviceScenariosService: DeviceScenariosService) {}

  @Post()
  create(@Body() createDeviceScenarioDto: CreateDeviceScenarioDto) {
    return this.deviceScenariosService.create(createDeviceScenarioDto);
  }

  @Get()
  findAll() {
    return this.deviceScenariosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceScenariosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceScenarioDto: UpdateDeviceScenarioDto) {
    return this.deviceScenariosService.update(+id, updateDeviceScenarioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceScenariosService.remove(+id);
  }
}
