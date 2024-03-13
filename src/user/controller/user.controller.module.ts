import { CreateUserDto } from './../dtos/createUser.dto';
import { Post,Controller,Body } from '@nestjs/common';

@Controller('user')
export class ControllerModule {
    @Post()
    async creatUser(
        @Body() createUser:CreateUserDto
    ){//enquanto não ter todo o resultado ela não termina, a função
        return {
        ...createUser,
        password:undefined,
    }
    } 
}
