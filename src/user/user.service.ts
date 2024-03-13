import { CreateUserDto } from './dtos/createUser.dto';
import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { hash } from 'bcrypt';

@Injectable()
export class UserService {
    private users:User [] = [];
    async createUser(createUserDto:CreateUserDto) : Promise<User> {//esse promisse é porque ele retorna uma promessa não 
        //é garantido que irá vir
        const saltDrRounds=10;

        const passwordHashed = await hash(createUserDto.password,saltDrRounds);
        console.log("password:",passwordHashed);

        const user: User ={
            ...createUserDto,
            id:this.users.length + 1,//aumentar o id toda vez que o usuário for criado
            password:passwordHashed,
        }

        this.users.push(user);

        return user
    }

    async getAllUser():Promise<User[]>{
        return this.users;
    }
}
