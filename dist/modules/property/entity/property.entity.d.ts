import { AreaEntity } from "src/modules/area/entity/area.entity";
import { FeaturesEntity } from "src/modules/features/entity/features.entity";
import { GalleryEntity } from "src/modules/gallery/entity/gallery.entity";
import { LocalisationEntity } from "src/modules/localisation/entity/localisation.entity";
import { PriceEntity } from "src/modules/price/entity/price.entity";
import { VideosEntity } from "src/modules/videos/entity/videos.entity";
import { PropertyStatus } from "../enum/property.status.enum";
export declare class PropertyEntity {
    id: number;
    title: string;
    desc: string;
    propertyType: string;
    propertyStatus: PropertyStatus;
    city: string;
    zipCode: string;
    neighborhood: string;
    adresse: string;
    features: FeaturesEntity[];
    bedrooms: number;
    bathrooms: number;
    garages: number;
    yearBuilt: number;
    gallery: GalleryEntity[];
    location: LocalisationEntity;
    area: AreaEntity;
    priceDollar: PriceEntity;
    videos: VideosEntity[];
}
