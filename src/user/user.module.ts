import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/user.controller.module';
import { UserService } from './user.service';

@Module({
  controllers: [ControllerModule],
  providers: [UserService],
})
export class UserModule {}
