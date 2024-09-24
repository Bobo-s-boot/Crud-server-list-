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
exports.CategoryService = void 0;
const common_1 = require("@nestjs/common");
const category_repository_1 = require("./category.repository");
const typeorm_1 = require("@nestjs/typeorm");
const errors_message_1 = require("../theme/errors-message");
const category_entity_1 = require("./category.entity");
let CategoryService = class CategoryService {
    constructor(categoryRepository) {
        this.categoryRepository = categoryRepository;
    }
    async create(createCategoryDto) {
        try {
            const category = new category_entity_1.Category();
            category.name = createCategoryDto.name;
            const saveCategory = await this.categoryRepository.createCategory(category);
            const categoryDTO = {
                id: saveCategory.id,
                name: saveCategory.name,
            };
            return categoryDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.CREATE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_CREATE_ERROR);
        }
    }
    async findAll() {
        try {
            const category = await this.categoryRepository.getCategoriesList();
            return category.map((category) => ({
                id: category.id,
                name: category.name,
            }));
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.LIST_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.LIST_ERROR);
        }
    }
    async findOne(category) {
        try {
            const categoryDTO = {
                id: category.id,
                name: category.name,
            };
            return categoryDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR);
        }
    }
    async update(category, updateCategoryDto) {
        try {
            const updatePhoto = await this.categoryRepository.updateCategory(category, updateCategoryDto);
            return {
                name: category.name,
            };
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.UPDATE_ERROR);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_UPDATE_ERROR);
        }
    }
    async remove(category) {
        try {
            await this.categoryRepository.deleteCategory(category);
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR);
        }
    }
};
exports.CategoryService = CategoryService;
exports.CategoryService = CategoryService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(category_repository_1.CategoryRepository)),
    __metadata("design:paramtypes", [category_repository_1.CategoryRepository])
], CategoryService);
//# sourceMappingURL=category.service.js.map