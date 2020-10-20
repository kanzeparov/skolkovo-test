import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import * as mqtt from 'async-mqtt';
import { AsyncMqttClient } from 'async-mqtt';
import {SocketGateway} from "../gateway/socket.gateway";
import {ConfigService} from "../config/config.service";

@Injectable()
export class MqttService implements OnModuleInit, OnModuleDestroy {
  private client: AsyncMqttClient;

  constructor(private config: ConfigService, private appGateway: SocketGateway) {}

  async onModuleInit(): Promise<void> {
    console.log(this.config.mqttServer)
    this.client = await mqtt.connect(this.config.mqttServer);
    await this.client.subscribe(this.config.mqttTopic);
    this.client.on("message", this.appGateway.sendMessage.bind(this.appGateway))
  }

  async onModuleDestroy(): Promise<void> {
    await this.client?.end(true);
    this.client = null;
  }
}
