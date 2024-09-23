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
exports.PhotoService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const photo_repository_1 = require("./photo.repository");
const photo_entity_1 = require("./photo.entity");
const errors_message_1 = require("../theme/errors-message");
let PhotoService = class PhotoService {
    constructor(photoRepository) {
        this.photoRepository = photoRepository;
    }
    async create(createPhotoDto) {
        try {
            const photo = new photo_entity_1.Photo();
            photo.url = createPhotoDto.url;
            const saverPhoto = await this.photoRepository.createPhoto(photo);
            const photoDTO = {
                id: saverPhoto.id,
                url: saverPhoto.url,
            };
            return photoDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.PHOTO_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_CREATE_ERROR);
        }
    }
    async findAll() {
        try {
            const photo = await this.photoRepository.getPhotosList();
            return photo.map((photo) => ({
                id: photo.id,
                url: photo.url,
            }));
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.LIST_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.LIST_ERROR);
        }
    }
    async findOne(photo) {
        try {
            const photoDTO = {
                id: photo.id,
                url: photo.url,
            };
            return photoDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR);
        }
    }
    async update(photo, updatePhotoDto) {
        try {
            const updatePhoto = await this.photoRepository.updatePhoto(photo, updatePhotoDto);
            return {
                url: updatePhoto.url,
            };
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.UPDATE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_UPDATE_ERROR);
        }
    }
    async remove(photo) {
        try {
            await this.photoRepository.deletePhoto(photo);
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR);
        }
    }
};
exports.PhotoService = PhotoService;
exports.PhotoService = PhotoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(photo_repository_1.PhotoRepository)),
    __metadata("design:paramtypes", [photo_repository_1.PhotoRepository])
], PhotoService);
//# sourceMappingURL=photo.service.js.map