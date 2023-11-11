import { Module } from '@nestjs/common';
import { DeviceNotificationsService } from './device_notifications.service';
import { DeviceNotificationsController } from './device_notifications.controller';

@Module({
  controllers: [DeviceNotificationsController],
  providers: [DeviceNotificationsService],
})
export class DeviceNotificationsModule {}
