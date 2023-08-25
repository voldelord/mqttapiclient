import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { DevicesModule } from './devices/devices.module';
import { TopicsModule } from './topics/topics.module';
import { MqttSubscribeService } from './mqtt-subscribe/mqtt-subscribe.service';
import { MqttPublishService } from './mqtt-publish/mqtt-publish.service';

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
  ],
  controllers: [],
  providers: [MqttSubscribeService, MqttPublishService],
})
export class AppModule {}
