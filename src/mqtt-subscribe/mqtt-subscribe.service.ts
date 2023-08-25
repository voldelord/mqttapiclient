// mqtt-subscribe.service.ts
import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttSubscribeService {
  private client: mqtt.MqttClient;

  constructor() {
    const brokerUrl = 'mqtt://localhost:1883';

    this.client = mqtt.connect(brokerUrl);

    this.client.on('connect', () => {
      console.log('Conexión exitosa al broker MQTT para suscripción');
    });

    this.client.on('error', (error) => {
      console.error('Error en la conexión MQTT para suscripción:', error);
    });

    this.client.on('message', (topic, message) => {
      console.log(
        `Mensaje recibido en el tópico ${topic}: ${message.toString()}`,
      );
    });
  }

  subscribe(topic: string) {
    this.client.subscribe(topic);
  }

  close() {
    this.client.end();
  }
}
