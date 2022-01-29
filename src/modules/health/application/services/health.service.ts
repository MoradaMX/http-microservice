import { Injectable } from '@nestjs/common';
import {
  HealthCheckResult,
  HealthCheckService,
  HttpHealthIndicator,
} from '@nestjs/terminus';
import { ConfigService } from '@nestjs/config';

import { HealthConfig } from '../config/health.loader.type';

@Injectable()
export class HealthService {
  constructor(
    private readonly configService: ConfigService,
    private readonly health: HealthCheckService,
    private readonly http: HttpHealthIndicator,
  ) {}

  public healthCheck(): Promise<HealthCheckResult> {
    const apis = this.configService.get<HealthConfig>('health');

    const httpPings = Object.keys(apis).map((api) => () => {
      const { host, port } = apis[api];
      return this.http.pingCheck(api, `http://${host}:${port}/health`);
    });

    return this.health.check([...httpPings]);
  }
}
