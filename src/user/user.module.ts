import { UserEntity } from './interfaces/user.entity';
import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/user.controller.module';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [ControllerModule],
  providers: [UserService],
  exports:[UserService],
})
export class UserModule {}
