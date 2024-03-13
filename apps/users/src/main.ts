import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { SharedService } from '@app/common';

async function bootstrap() {
  const app = await NestFactory.create(UsersModule);

  const configService = app.get(ConfigService);
  const sharedService = app.get(SharedService);
  const queue = configService.get('RABBITMQ_USER_QUEUE');

  app.connectMicroservice(sharedService.getRmqOptions(queue));
  console.log('abc');
  app.startAllMicroservices();
}
bootstrap();
