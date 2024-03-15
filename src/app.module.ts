import { ControllerModule } from './user/controller/user.controller.module';
import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
//import { UserService } from './user/user.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    ConfigModule.forRoot({
        envFilePath:[".env.development.local"],
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
        database:process.env.DB_DATABASE,
        host:process.env.DB_HOST,
        password:process.env.DB_PASSWORD,
        port: +process.env.DB_PORT,
        username:process.env.DB_USERNAME,
        synchronize:true,
        entities:[`${__dirname}/**/*.entity{.js,.ts}`],
    }),
    UserModule],
  controllers: [ControllerModule],
  providers: [],
})
export class AppModule {}
