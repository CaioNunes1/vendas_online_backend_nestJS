import { UserEntity } from './interfaces/user.entity';
import { Module } from '@nestjs/common';
import { ControllerModule } from './controller/user.controller.module';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],//Módulo do TypeORM integrado ao NestJS, usado para interação com o banco de dados.
  //Aqui você está importando e registrando sua entidade UserEntity com o TypeORM. 
  // TypeOrmModule.forFeature([UserEntity]) informa ao TypeORM para incluir 
  // UserEntity neste módulo, possibilitando que o repositório de UserEntity seja 
  // injetado em serviços dentro deste módulo.
  controllers: [ControllerModule],
  providers: [UserService],
  // Serviços ou providers que podem ser injetados em outras partes do módulo. Aqui, você está 
  // registrando UserService, permitindo que ele seja injetado em controladores ou outros serviços dentro deste módulo.
  exports:[UserService],
  // Define quais providers estão disponíveis para serem injetados em outros módulos. 
  // Exportar UserService permite que ele seja injetado em serviços ou controladores de outros módulos que importam UserModule.


})
export class UserModule {}
