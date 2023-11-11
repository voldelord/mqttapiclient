import { Module } from '@nestjs/common';
import { UserHomesService } from './user_homes.service';
import { UserHomesController } from './user_homes.controller';

@Module({
  controllers: [UserHomesController],
  providers: [UserHomesService],
})
export class UserHomesModule {}
