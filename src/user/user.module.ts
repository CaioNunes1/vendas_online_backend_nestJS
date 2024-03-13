import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/user.controller.module';

@Module({
  controllers: [ControllerModule],
})
export class UserModule {}
