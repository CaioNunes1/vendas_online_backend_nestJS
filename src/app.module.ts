import { ControllerModule } from './user/controller/user.controller.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserService } from './user/user.service';


@Module({
  imports: [UserModule],
  controllers: [ControllerModule],
  providers: [UserService],
})
export class AppModule {}
