// homes.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Home } from './entities/home.entity';
import { HomesService } from './homes.service';
import { HomesController } from './homes.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Home])],
  controllers: [HomesController],
  providers: [HomesService],
})
export class HomesModule {}
