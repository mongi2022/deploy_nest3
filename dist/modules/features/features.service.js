"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const features_entity_1 = require("./entity/features.entity");
let FeaturesService = class FeaturesService {
    constructor(featuresRepository, propertyRepository) {
        this.featuresRepository = featuresRepository;
        this.propertyRepository = propertyRepository;
    }
    getAllFeatures() {
        return this.featuresRepository.find();
    }
    getFeaturesById(id) {
        const features = this.featuresRepository.findOne({ where: { id } });
        return features;
    }
    async createFeatures(propertyId, featureDTO) {
        const property = await this.propertyRepository.findOne({ where: { id: propertyId } });
        const savedFeature = await this.featuresRepository.create(Object.assign(Object.assign({}, featureDTO), { property }));
        await this.featuresRepository.save(savedFeature);
        return savedFeature;
    }
    async updateFeatures(id, data) {
        await this.featuresRepository.update(id, data);
        const updatedLocal = await this.featuresRepository.findOne({ where: { id } });
        if (updatedLocal == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        return updatedLocal;
    }
    async deleteFeatures(id) {
        const deletedLocal = await this.featuresRepository.findOne({ where: { id } });
        if (deletedLocal == null)
            throw new common_1.NotFoundException(`Feature n° ${id} n'existe pas`);
        await this.featuresRepository.delete({ id });
        return deletedLocal;
    }
};
FeaturesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(features_entity_1.FeaturesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(property_entity_1.PropertyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], FeaturesService);
exports.FeaturesService = FeaturesService;
//# sourceMappingURL=features.service.js.map