import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DeviceNotificationsService } from './device_notifications.service';
import { CreateDeviceNotificationDto } from './dto/create-device_notification.dto';
import { UpdateDeviceNotificationDto } from './dto/update-device_notification.dto';

@Controller('device-notifications')
export class DeviceNotificationsController {
  constructor(private readonly deviceNotificationsService: DeviceNotificationsService) {}

  @Post()
  create(@Body() createDeviceNotificationDto: CreateDeviceNotificationDto) {
    return this.deviceNotificationsService.create(createDeviceNotificationDto);
  }

  @Get()
  findAll() {
    return this.deviceNotificationsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deviceNotificationsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeviceNotificationDto: UpdateDeviceNotificationDto) {
    return this.deviceNotificationsService.update(+id, updateDeviceNotificationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deviceNotificationsService.remove(+id);
  }
}
