import { Module } from '@nestjs/common';
import {ConfigModule} from "../config/config.module";
import {MqttService} from "./mqtt.service";
import {SocketModule} from "../gateway/socket.module";

@Module({
  imports: [ConfigModule, SocketModule],
  providers: [MqttService],
  exports: [MqttService]
})
export class MqttModule {
}
