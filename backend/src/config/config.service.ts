import { Injectable } from "@nestjs/common";
import * as Joi from "@hapi/joi";

export interface IEnvConfig {
  [key: string]: string | undefined;
}

function validateEnv(envConfig: IEnvConfig): IEnvConfig {
  const schema = Joi.object({
    PORT: Joi.number().default(9001),
    HOST: Joi.string().default("0.0.0.0"),
    MQTT_SERVER: Joi.string(),
    MQTT_PORT: Joi.number(),
    MQTT_TOPIC: Joi.string()
  });

  const { error, value: validatedEnvConfig } = schema.validate(envConfig, {
    allowUnknown: true
  });
  if (error) {
    throw new Error(`Config validation error: ${error.message}`);
  }
  return validatedEnvConfig;
}


@Injectable()
export class ConfigService {
  private readonly envConfig: IEnvConfig;

  constructor() {
    this.envConfig = validateEnv(process.env);
  }

  get host(): string {
    return String(this.envConfig.HOST);
  }

  get port(): number {
    return Number(this.envConfig.PORT);
  }

  get mqttServer(): string {
    return String(this.envConfig.MQTT_SERVER)
  }

  get mqttPort(): number {
    return Number(this.envConfig.MQTT_PORT);
  }

  get mqttTopic(): string {
    return String(this.envConfig.MQTT_TOPIC)
  }
}
