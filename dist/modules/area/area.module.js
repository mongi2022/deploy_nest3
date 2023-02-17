"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AreaModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const area_entity_1 = require("./entity/area.entity");
const area_controller_1 = require("./area.controller");
const area_service_1 = require("./area.service");
const property_service_1 = require("../property/property.service");
const property_entity_1 = require("../property/entity/property.entity");
let AreaModule = class AreaModule {
};
AreaModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([area_entity_1.AreaEntity, property_entity_1.PropertyEntity])],
        controllers: [area_controller_1.AreaController],
        providers: [area_service_1.AreaService, property_service_1.PropertyService]
    })
], AreaModule);
exports.AreaModule = AreaModule;
//# sourceMappingURL=area.module.js.map