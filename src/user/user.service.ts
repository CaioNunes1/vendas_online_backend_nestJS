import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { UserEntity } from './interfaces/user.entity';
import { hash } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
    
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository:Repository<UserEntity>,
    ){

    }
    
    async createUser(createUserDto:CreateUserDto) : Promise<UserEntity> {//esse promisse é porque ele retorna uma promessa não 
        //é garantido que irá vir
        const saltDrRounds=10;

        const passwordHashed = await hash(createUserDto.password,saltDrRounds);
        console.log("password:",passwordHashed);

        return this.userRepository.save({
            ...createUserDto,
            password:passwordHashed,
        })

    }

    async getAllUser():Promise<UserEntity[]>{
        return this.userRepository.find();
    }
}
