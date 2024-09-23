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
exports.PhotoController = void 0;
const common_1 = require("@nestjs/common");
const photo_service_1 = require("./photo.service");
const create_photo_dto_1 = require("./dto/create-photo.dto");
const update_photo_dto_1 = require("./dto/update-photo.dto");
const photo_decorator_1 = require("./photo.decorator");
const photo_guard_1 = require("./photo.guard");
const photo_entity_1 = require("./photo.entity");
let PhotoController = class PhotoController {
    constructor(photoService) {
        this.photoService = photoService;
    }
    async create(createPhotoDto) {
        return this.photoService.create(createPhotoDto);
    }
    findAll() {
        return this.photoService.findAll();
    }
    async findOne(photo) {
        return this.photoService.findOne(photo);
    }
    update(photo, updatePhotoDto) {
        return this.photoService.update(photo, updatePhotoDto);
    }
    remove(photo) {
        return this.photoService.remove(photo);
    }
};
exports.PhotoController = PhotoController;
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_photo_dto_1.CreatePhotoDto]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':photoId'),
    (0, common_1.UseGuards)(photo_decorator_1.PhotoGuard),
    __param(0, (0, photo_guard_1.GetId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photo_entity_1.Photo]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':photoId'),
    (0, common_1.UseGuards)(photo_decorator_1.PhotoGuard),
    __param(0, (0, photo_guard_1.GetId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photo_entity_1.Photo,
        update_photo_dto_1.UpdatePhotoDto]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':photoId'),
    (0, common_1.UseGuards)(photo_decorator_1.PhotoGuard),
    __param(0, (0, photo_guard_1.GetId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [photo_entity_1.Photo]),
    __metadata("design:returntype", Promise)
], PhotoController.prototype, "remove", null);
exports.PhotoController = PhotoController = __decorate([
    (0, common_1.Controller)('photo'),
    __metadata("design:paramtypes", [photo_service_1.PhotoService])
], PhotoController);
//# sourceMappingURL=photo.controller.js.map