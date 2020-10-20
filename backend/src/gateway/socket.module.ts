import { Module } from '@nestjs/common';
import {SocketGateway} from "./socket.gateway";
import {ConfigModule} from "../config/config.module";

@Module({
  imports: [ConfigModule],
  providers: [SocketGateway],
  exports: [SocketGateway]
})
export class SocketModule {
}
