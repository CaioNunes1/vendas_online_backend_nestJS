import { CityEntity } from './entities/city.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class CityService {
    constructor(
        //Um decorador usado para injetar um repositório TypeORM específico para a entidade UserEntity.
        @InjectRepository(CityEntity)
        // Um repositório é um abstração sobre o armazenamento que permite
        //  realizar operações no banco de dados relacionadas a uma entidade específica.
        private readonly cityRepository:Repository<CityEntity>,
    ){}

    async getAllCity():Promise<CityEntity[]>{
        return this.cityRepository.find();
    }
}
