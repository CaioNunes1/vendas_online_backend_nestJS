import { ControllerModule } from './user/controller/user.controller.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [ControllerModule],
  providers: [],
})
export class AppModule {}
