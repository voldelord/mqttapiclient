import { Module } from '@nestjs/common';
import { TemperatureHistoryService } from './temperature_history.service';
import { TemperatureHistoryController } from './temperature_history.controller';

@Module({
  controllers: [TemperatureHistoryController],
  providers: [TemperatureHistoryService],
})
export class TemperatureHistoryModule {}
