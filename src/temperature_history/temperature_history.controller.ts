import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TemperatureHistoryService } from './temperature_history.service';
import { CreateTemperatureHistoryDto } from './dto/create-temperature_history.dto';
import { UpdateTemperatureHistoryDto } from './dto/update-temperature_history.dto';

@Controller('temperature-history')
export class TemperatureHistoryController {
  constructor(private readonly temperatureHistoryService: TemperatureHistoryService) {}

  @Post()
  create(@Body() createTemperatureHistoryDto: CreateTemperatureHistoryDto) {
    return this.temperatureHistoryService.create(createTemperatureHistoryDto);
  }

  @Get()
  findAll() {
    return this.temperatureHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.temperatureHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTemperatureHistoryDto: UpdateTemperatureHistoryDto) {
    return this.temperatureHistoryService.update(+id, updateTemperatureHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.temperatureHistoryService.remove(+id);
  }
}
