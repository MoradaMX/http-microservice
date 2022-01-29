import { HttpServerConfiguration } from '@mokalli/common';

export const configLoader = (): ConfigLoader => ({
  server: {
    host: process.env.HOST,
    port: parseInt(process.env.PORT, 10),
  },
});

type ConfigLoader = {
  server: HttpServerConfiguration;
};
