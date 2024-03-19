import { CityService } from './../city.service';
import { CityController } from './../city.controller';
import { CityEntity } from './city.entity';
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports:[TypeOrmModule.forFeature([CityEntity])],
    controllers:[CityController],
    providers:[CityService],
    exports:[CityService]
})
export class CityModule{}