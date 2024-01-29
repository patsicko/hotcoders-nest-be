import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';

import * as path from 'path';
import * as cookieParser from 'cookie-parser';

const privateKeyPath = path.join(__dirname, '../private-key.pem');
const certificatePath = path.join(__dirname, '../certificate.pem');

const privateKey = fs.readFileSync(privateKeyPath, 'utf8');
const certificate = fs.readFileSync(certificatePath, 'utf8');

const credentials = { key: privateKey, cert: certificate };

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.setGlobalPrefix('api')
  app.enableCors({
    origin: '*',
    credentials: true,
  })
  await app.listen(8000);
}
bootstrap();
