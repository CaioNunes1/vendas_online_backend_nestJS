
import { CityEntity } from './entities/city.entity';
import { Controller, Get } from '@nestjs/common';
import { CityService } from './city.service';


@Controller('city')
export class CityController {
    constructor ( readonly stateService: CityService){}

    @Get()
    async getAllState():Promise<CityEntity[]>{
        return this.stateService.getAllCity();
    }
}
