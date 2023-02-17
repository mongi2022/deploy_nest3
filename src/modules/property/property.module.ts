import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PropertyController } from "./property.controller";
import { PropertyService } from "./property.service";
import { PropertyEntity } from "./entity/property.entity";

    @Module({
        imports: [TypeOrmModule.forFeature([PropertyEntity])],
        controllers:[PropertyController],
        providers:[PropertyService]
        
    })
   
    export class PropertyModule {
    
    }