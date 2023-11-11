import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { TopicsModule } from './topics/topics.module';
import { MqttSubscribeService } from './mqtt-subscribe/mqtt-subscribe.service';
import { MqttPublishService } from './mqtt-publish/mqtt-publish.service';
import { HomesModule } from './homes/homes.module';
import { UserHomesModule } from './user_homes/user_homes.module';
import { TemperatureHistoryModule } from './temperature_history/temperature_history.module';
import { DeviceNotificationsModule } from './device_notifications/device_notifications.module';
import { UserNotificationsModule } from './user_notifications/user_notifications.module';
import { ModesModule } from './modes/modes.module';
import { DeviceModesModule } from './device_modes/device_modes.module';
import { ScenariosModule } from './scenarios/scenarios.module';
import { DeviceScenariosModule } from './device_scenarios/device_scenarios.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'mqttmosca',
      password: 'madara_25',
      database: 'apimqtt',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    UsersModule,
    DevicesModule,
    TopicsModule,
    HomesModule,
    UserHomesModule,
    TemperatureHistoryModule,
    DeviceNotificationsModule,
    UserNotificationsModule,
    ModesModule,
    DeviceModesModule,
    ScenariosModule,
    DeviceScenariosModule,
  ],
  controllers: [],
  providers: [MqttSubscribeService, MqttPublishService],
})
export class AppModule {}
