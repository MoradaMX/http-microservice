import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TerminusModule } from '@nestjs/terminus';

import { healthLoader } from './application/config/health.loaders';
import { HealthService } from './application/services/health.service';
import { HealthController } from './infrastructure/http/controllers/health.controller';

@Module({
  imports: [TerminusModule, HttpModule, ConfigModule.forFeature(healthLoader)],
  providers: [HealthService],
  controllers: [HealthController],
})
export class HealthModule {}
