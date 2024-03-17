import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
// Um decorador que marca a classe como um provedor de serviço, permitindo que
//  ela seja injetada em outras classes através do sistema de injeção de dependência do NestJS.
export class UserService {
    
    constructor(
        //Um decorador usado para injetar um repositório TypeORM específico para a entidade UserEntity.
        @InjectRepository(UserEntity)
        // Um repositório é um abstração sobre o armazenamento que permite
        //  realizar operações no banco de dados relacionadas a uma entidade específica.
        private readonly userRepository:Repository<UserEntity>,
    ){

    }
    
    async createUser(createUserDto:CreateUserDto) : Promise<UserEntity> {//esse promisse é porque ele retorna uma promessa não 
        //é garantido que irá vir
        const saltDrRounds=10;

        const passwordHashed = await hash(createUserDto.password,saltDrRounds);//hash é para criar senhas criptografadas
        console.log("password:",passwordHashed);

        return this.userRepository.save({
            ...createUserDto,
            type_user:1,
            password:passwordHashed,
        })

    }

    async getAllUser():Promise<UserEntity[]>{
        return this.userRepository.find();
    }
}
