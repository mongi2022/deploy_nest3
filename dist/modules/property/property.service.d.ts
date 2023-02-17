import { Repository } from "typeorm";
import { PropertyDTO } from "./dto/property.dto";
import { PropertyEntity } from "./entity/property.entity";
export declare class PropertyService {
    private readonly propertyRepository;
    constructor(propertyRepository: Repository<PropertyEntity>);
    getAllProperties(): Promise<PropertyEntity[]>;
    getPropertyById(id: number): Promise<PropertyEntity>;
    createProperty(data: PropertyDTO): Promise<PropertyEntity>;
    updateProperty(id: number, data: Partial<PropertyEntity>): Promise<PropertyEntity>;
    deleteProperty(id: number): Promise<PropertyEntity>;
}
