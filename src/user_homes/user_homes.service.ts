import { Injectable } from '@nestjs/common';
import { CreateUserHomeDto } from './dto/create-user_home.dto';
import { UpdateUserHomeDto } from './dto/update-user_home.dto';

@Injectable()
export class UserHomesService {
  create(createUserHomeDto: CreateUserHomeDto) {
    return 'This action adds a new userHome';
  }

  findAll() {
    return `This action returns all userHomes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userHome`;
  }

  update(id: number, updateUserHomeDto: UpdateUserHomeDto) {
    return `This action updates a #${id} userHome`;
  }

  remove(id: number) {
    return `This action removes a #${id} userHome`;
  }
}
