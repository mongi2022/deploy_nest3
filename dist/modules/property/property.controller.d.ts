import { Repository } from "typeorm";
import { PropertyService } from "./property.service";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";
export declare class PropertyController {
    private readonly propertyRepository;
    private readonly propertyService;
    constructor(propertyRepository: Repository<PropertyEntity>, propertyService: PropertyService);
    getAllproperty(): Promise<PropertyEntity[]>;
    getpropertyById(id: number): Promise<PropertyEntity>;
    createproperty(propertyDTO: PropertyDTO): Promise<PropertyEntity>;
    updateproperty(id: number, property: PropertyEntity): Promise<PropertyEntity>;
    deleteproperty(id: number): Promise<PropertyEntity>;
}
