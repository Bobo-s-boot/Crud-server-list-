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
exports.PhotoGuard = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const photo_repository_1 = require("./photo.repository");
const errors_message_1 = require("../theme/errors-message");
let PhotoGuard = class PhotoGuard {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const { params } = request;
        if (!params.photoId)
            throw new common_1.BadRequestException(errors_message_1.ERROR_MESSAGE.GUARD_ERROR);
        const photo = await this.photoRepository.getPhoto(params.photoId);
        if (!photo)
            throw new common_1.BadRequestException(errors_message_1.ERROR_MESSAGE.GUARD_ERROR);
        request.photo = photo;
        return true;
    }
};
exports.PhotoGuard = PhotoGuard;
exports.PhotoGuard = PhotoGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(photo_repository_1.PhotoRepository)),
    __metadata("design:paramtypes", [photo_repository_1.PhotoRepository])
], PhotoGuard);
//# sourceMappingURL=photo.decorator.js.map