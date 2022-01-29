import { ConfigModuleOptions } from '@nestjs/config/dist/interfaces';

import { configSchema } from './schemas/config.schema';
import { serverConfigLoader } from './loaders/server.loader';
import { healthSchema } from '../modules/health/application/config/health.schema';

export const configOptions: ConfigModuleOptions = {
  cache: true,
  isGlobal: true,
  load: [serverConfigLoader],
  validationSchema: Object.assign(configSchema, healthSchema),
  validationOptions: {
    allowUnknown: true,
    abortEarly: true,
  },
};
