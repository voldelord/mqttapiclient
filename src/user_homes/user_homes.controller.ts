import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserHomesService } from './user_homes.service';
import { CreateUserHomeDto } from './dto/create-user_home.dto';
import { UpdateUserHomeDto } from './dto/update-user_home.dto';

@Controller('user-homes')
export class UserHomesController {
  constructor(private readonly userHomesService: UserHomesService) {}

  @Post()
  create(@Body() createUserHomeDto: CreateUserHomeDto) {
    return this.userHomesService.create(createUserHomeDto);
  }

  @Get()
  findAll() {
    return this.userHomesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userHomesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserHomeDto: UpdateUserHomeDto) {
    return this.userHomesService.update(+id, updateUserHomeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userHomesService.remove(+id);
  }
}
