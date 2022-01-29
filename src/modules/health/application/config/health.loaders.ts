import { registerAs } from '@nestjs/config';

import { HealthConfig } from './health.loader.type';

export const healthLoader = registerAs(
  'health',
  (): HealthConfig => ({
    accounts: {
      host: process.env.ACCOUNTS_HOST,
      port: parseInt(process.env.ACCOUNTS_PORT, 10),
    },
    outbound: {
      host: process.env.OUTBOUND_HOST,
      port: parseInt(process.env.OUTBOUND_PORT, 10),
    },
    favorites: {
      host: process.env.FAVORITES_HOST,
      port: parseInt(process.env.FAVORITES_PORT, 10),
    },
  }),
);
