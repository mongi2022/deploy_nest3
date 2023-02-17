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
exports.GalleryEntity = void 0;
const property_entity_1 = require("../../property/entity/property.entity");
const typeorm_1 = require("typeorm");
let GalleryEntity = class GalleryEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], GalleryEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GalleryEntity.prototype, "small", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GalleryEntity.prototype, "medium", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], GalleryEntity.prototype, "big", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => property_entity_1.PropertyEntity, (property) => property.gallery, { onDelete: "CASCADE", onUpdate: "CASCADE" }),
    __metadata("design:type", property_entity_1.PropertyEntity)
], GalleryEntity.prototype, "property", void 0);
GalleryEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'gallery' })
], GalleryEntity);
exports.GalleryEntity = GalleryEntity;
//# sourceMappingURL=gallery.entity.js.map