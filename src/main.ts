import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as volleyball from 'volleyball';
import { HttpServerConfiguration } from '@mokalli/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './modules/app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);
  const config = configService.get<HttpServerConfiguration>('server');
  const { host, port } = config;

  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();
  app.enableVersioning();
  app.use(volleyball);

  const documentBuilder = new DocumentBuilder()
    .setTitle('Favorites')
    .setDescription('API Reference')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, documentBuilder);
  SwaggerModule.setup('docs', app, document);

  app.listen(port, host, () => {
    Logger.log(`Server ready on http://${host}:${port}`, 'Application');
  });
}

bootstrap();
