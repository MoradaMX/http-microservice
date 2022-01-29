import { HttpServerConfiguration } from '@mokalli/common';

export type HealthConfig = {
  accounts: HttpServerConfiguration;
  outbound: HttpServerConfiguration;
  favorites: HttpServerConfiguration;
};
