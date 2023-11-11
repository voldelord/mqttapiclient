import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceNotificationDto } from './create-device_notification.dto';

export class UpdateDeviceNotificationDto extends PartialType(CreateDeviceNotificationDto) {}
