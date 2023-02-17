"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalisationModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const property_entity_1 = require("../property/entity/property.entity");
const property_service_1 = require("../property/property.service");
const localisation_entity_1 = require("./entity/localisation.entity");
const localisation_controller_1 = require("./localisation.controller");
const localisation_service_1 = require("./localisation.service");
let LocalisationModule = class LocalisationModule {
};
LocalisationModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([localisation_entity_1.LocalisationEntity, property_entity_1.PropertyEntity])],
        controllers: [localisation_controller_1.LocalisationController],
        providers: [localisation_service_1.LocalisationService, property_service_1.PropertyService]
    })
], LocalisationModule);
exports.LocalisationModule = LocalisationModule;
//# sourceMappingURL=localisation.module.js.map