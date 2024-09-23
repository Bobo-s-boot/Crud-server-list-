"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotoRepository = void 0;
const typeorm_1 = require("typeorm");
const photo_entity_1 = require("./photo.entity");
const errors_message_1 = require("../theme/errors-message");
let PhotoRepository = class PhotoRepository extends typeorm_1.Repository {
    async createPhoto(createPhotoDto) {
        const photo = new photo_entity_1.Photo();
        photo.url = createPhotoDto.url;
        return await this.save(photo);
    }
    async getPhotosList() {
        return await this.find({
            order: {
                id: 'DESC',
            },
        });
    }
    async getPhoto(id) {
        const photo = await this.findOne({ where: { id } });
        if (!photo) {
            throw new Error(errors_message_1.ERROR_MESSAGE.PHOTO_ERROR);
        }
        return photo;
    }
    async updatePhoto(photo, updatePhoto) {
        if (updatePhoto.url !== undefined)
            photo.url = updatePhoto.url;
        return await this.save(photo);
    }
    async deletePhoto(photo) {
        return await this.remove(photo);
    }
};
exports.PhotoRepository = PhotoRepository;
exports.PhotoRepository = PhotoRepository = __decorate([
    (0, typeorm_1.EntityRepository)(photo_entity_1.Photo)
], PhotoRepository);
//# sourceMappingURL=photo.repository.js.map