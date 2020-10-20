import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ConfigModule} from "./config/config.module";
import {MqttModule} from "./mqtt/mqtt.module";
import {SocketModule} from "./gateway/socket.module";


@Module({
  imports: [
    ConfigModule,
    SocketModule,
    MqttModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
