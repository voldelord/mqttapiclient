import { Injectable } from '@nestjs/common';
import { CreateDeviceNotificationDto } from './dto/create-device_notification.dto';
import { UpdateDeviceNotificationDto } from './dto/update-device_notification.dto';

@Injectable()
export class DeviceNotificationsService {
  create(createDeviceNotificationDto: CreateDeviceNotificationDto) {
    return 'This action adds a new deviceNotification';
  }

  findAll() {
    return `This action returns all deviceNotifications`;
  }

  findOne(id: number) {
    return `This action returns a #${id} deviceNotification`;
  }

  update(id: number, updateDeviceNotificationDto: UpdateDeviceNotificationDto) {
    return `This action updates a #${id} deviceNotification`;
  }

  remove(id: number) {
    return `This action removes a #${id} deviceNotification`;
  }
}
