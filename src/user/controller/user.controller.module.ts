import { UserService } from './../user.service';
import { CreateUserDto } from './../dtos/createUser.dto';
import { Post,Controller,Body, Get } from '@nestjs/common';
import { UserEntity } from '../interfaces/user.entity';

@Controller('user')
export class ControllerModule {
    constructor ( readonly userService: UserService){}

    @Post()
    async createUser(@Body() createUser:CreateUserDto): Promise<UserEntity>{//enquanto não ter todo o resultado ela não termina, a função
        return this.userService.createUser(createUser);
    }
    
    @Get()
    async getAllUser(): Promise<UserEntity[]>{
        return this.userService.getAllUser();
    }
    
}
