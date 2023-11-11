// homes.controller.ts
import { Controller, Post, Put, Get, Param, Delete, Body } from '@nestjs/common';
import { HomesService } from './homes.service';
import { CreateHomeDto, UpdateHomeDto } from './dto/home.dto';

@Controller('homes')
export class HomesController {
  constructor(private readonly homesService: HomesService) {}

  @Post()
  async createHome(@Body() createHomeDto: CreateHomeDto) {
    return this.homesService.createHome(createHomeDto);
  }

  @Put(':id')
  async updateHome(@Param('id') id: number, @Body() updateHomeDto: UpdateHomeDto) {
    return this.homesService.updateHome(id, updateHomeDto);
  }

  @Get()
  async getAllHomes() {
    return this.homesService.getAllHomes();
  }

  @Get(':id')
  async getHomeById(@Param('id') id: number) {
    return this.homesService.getHomeById(id);
  }

  @Delete(':id')
  async deleteHome(@Param('id') id: number) {
    return this.homesService.deleteHome(id);
  }
}
