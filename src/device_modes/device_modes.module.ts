import { Module } from '@nestjs/common';
import { DeviceModesService } from './device_modes.service';
import { DeviceModesController } from './device_modes.controller';

@Module({
  controllers: [DeviceModesController],
  providers: [DeviceModesService],
})
export class DeviceModesModule {}
