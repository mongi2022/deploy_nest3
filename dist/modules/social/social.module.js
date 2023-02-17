"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const social_controller_1 = require("./social.controller");
const social_service_1 = require("./social.service");
const social_entity_1 = require("./entity/social.entity");
let SocialModule = class SocialModule {
};
SocialModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([social_entity_1.SocialEntity])],
        controllers: [social_controller_1.SocialController],
        providers: [social_service_1.SocialService]
    })
], SocialModule);
exports.SocialModule = SocialModule;
//# sourceMappingURL=social.module.js.map