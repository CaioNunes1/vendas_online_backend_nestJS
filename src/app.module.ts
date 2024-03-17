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
        // Importa e configura o módulo de configuração, que é responsável por carregar variáveis de ambiente do arquivo 
        // especificado (".env.development.local"). Isso facilita a configuração da sua aplicação em diferentes ambientes 
        // (desenvolvimento, teste, produção, etc.) sem a necessidade de codificar valores de configuração diretamente no seu código.
    }),
    TypeOrmModule.forRoot({
      type:'postgres',
        database:process.env.DB_DATABASE,
        host:process.env.DB_HOST,
        password:process.env.DB_PASSWORD,
        port: +process.env.DB_PORT,
        username:process.env.DB_USERNAME,
        entities:[`${__dirname}/**/*.entity{.js,.ts}`],
        migrations:[`${__dirname}/migrations/{ts,*.js}`],
        migrationsRun:true,
        //synchronize:true,
        // Configura a conexão com o banco de dados PostgreSQL usando o TypeORM, um ORM (Object-Relational Mapping) 
        // que facilita a interação entre a aplicação e o banco de dados usando objetos do TypeScript. As opções 
        // passadas para forRoot incluem as credenciais do banco de dados, os caminhos para entidades e migrações,
        //  e a opção para executar migrações automaticamente ao iniciar a aplicação (migrationsRun: true).
        
    }),
    UserModule],
  controllers: [ControllerModule],
  providers: [],
})
export class AppModule {}
