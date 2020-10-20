import "dotenv/config";
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {ConfigService} from "./config/config.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const host = app.get(ConfigService).host;
  const port = app.get(ConfigService).port;
  app.enableCors();
  await app.listen(port, host);
}
bootstrap();
