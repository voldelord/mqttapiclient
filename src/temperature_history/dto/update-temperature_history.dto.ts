import { PartialType } from '@nestjs/mapped-types';
import { CreateTemperatureHistoryDto } from './create-temperature_history.dto';

export class UpdateTemperatureHistoryDto extends PartialType(CreateTemperatureHistoryDto) {}
