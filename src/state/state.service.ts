import { StateEntity } from './entitities/state.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class StateService {
    constructor(
        //Um decorador usado para injetar um repositório TypeORM específico para a entidade UserEntity.
        @InjectRepository(StateEntity)
        // Um repositório é um abstração sobre o armazenamento que permite
        //  realizar operações no banco de dados relacionadas a uma entidade específica.
        private readonly stateRepository:Repository<StateEntity>,
    ){}

    async getAllState():Promise<StateEntity[]>{
        return this.stateRepository.find();
    }
}
