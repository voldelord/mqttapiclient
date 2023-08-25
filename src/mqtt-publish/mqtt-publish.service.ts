// mqtt-publish.service.ts
import { Injectable } from '@nestjs/common';
import * as mqtt from 'mqtt';

@Injectable()
export class MqttPublishService {
  private client: mqtt.MqttClient;

  constructor() {
    const brokerUrl = 'mqtt://localhost:1883';

    this.client = mqtt.connect(brokerUrl);

    this.client.on('connect', () => {
      console.log('Conexión exitosa al broker MQTT para publicación');
    });

    this.client.on('error', (error) => {
      console.error('Error en la conexión MQTT para publicación:', error);
    });
  }

  publish(topic: string, message: string) {
    this.client.publish(topic, message, (error) => {
      if (error) {
        console.error('Error al publicar mensaje:', error);
      } else {
        console.log('Mensaje publicado con éxito');
      }
    });
  }

  close() {
    this.client.end();
  }
}
