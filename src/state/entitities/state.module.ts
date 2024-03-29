import { StateEntity } from './state.entity';
import { Module } from "@nestjs/common";
import { StateController } from "../state.controller";
import { StateService } from "../state.service"; 
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([StateEntity])],
    controllers:[StateController],
    providers:[StateService],
    exports:[StateService]
})
export class StateModule{}