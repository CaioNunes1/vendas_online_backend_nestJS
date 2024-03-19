import { Controller, Get } from '@nestjs/common';
import { StateService } from './state.service';
import { StateEntity } from './entitities/state.entity';

@Controller('state')
export class StateController {
    constructor ( readonly stateService: StateService){}

    @Get()
    async getAllState():Promise<StateEntity[]>{
        return this.stateService.getAllState();
    }
}
