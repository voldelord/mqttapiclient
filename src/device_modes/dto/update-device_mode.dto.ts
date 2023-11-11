import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceModeDto } from './create-device_mode.dto';

export class UpdateDeviceModeDto extends PartialType(CreateDeviceModeDto) {}
