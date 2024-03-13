import { UserService } from './../user.service';
import { CreateUserDto } from './../dtos/createUser.dto';
import { Post,Controller,Body, Get } from '@nestjs/common';
import { User } from '../interfaces/user.interface';

@Controller('user')
export class ControllerModule {
    constructor ( readonly userService: UserService){}

    @Post()
    async createUser(@Body() createUser:CreateUserDto): Promise<User>{//enquanto não ter todo o resultado ela não termina, a função
        return this.userService.createUser(createUser);
    }
    
    @Get()
    async getAllUser(): Promise<User[]>{
        return this.userService.getAllUser();
    }
    
}
