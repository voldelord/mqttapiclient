import { Module } from '@nestjs/common';
import { DeviceScenariosService } from './device_scenarios.service';
import { DeviceScenariosController } from './device_scenarios.controller';

@Module({
  controllers: [DeviceScenariosController],
  providers: [DeviceScenariosService],
})
export class DeviceScenariosModule {}
