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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeaturesEntity = void 0;
const property_entity_1 = require("../../property/entity/property.entity");
const typeorm_1 = require("typeorm");
let FeaturesEntity = class FeaturesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FeaturesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 50
    }),
    __metadata("design:type", String)
], FeaturesEntity.prototype, "desc", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(type => property_entity_1.PropertyEntity, property => property.features, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    __metadata("design:type", property_entity_1.PropertyEntity)
], FeaturesEntity.prototype, "property", void 0);
FeaturesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'features' })
], FeaturesEntity);
exports.FeaturesEntity = FeaturesEntity;
//# sourceMappingURL=features.entity.js.map