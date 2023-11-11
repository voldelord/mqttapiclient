import { PartialType } from '@nestjs/mapped-types';
import { CreateDeviceScenarioDto } from './create-device_scenario.dto';

export class UpdateDeviceScenarioDto extends PartialType(CreateDeviceScenarioDto) {}
