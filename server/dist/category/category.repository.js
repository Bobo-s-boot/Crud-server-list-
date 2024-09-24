"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryRepository = void 0;
const typeorm_1 = require("typeorm");
const category_entity_1 = require("./category.entity");
const errors_message_1 = require("../theme/errors-message");
let CategoryRepository = class CategoryRepository extends typeorm_1.Repository {
    async createCategory(createCategoryDtop) {
        const category = new category_entity_1.Category();
        category.name = createCategoryDtop.name;
        return await this.save(category);
    }
    async getCategoriesList() {
        return await this.find({
            order: {
                id: 'DESC',
            },
        });
    }
    async getCategory(id) {
        const category = await this.findOne({
            where: { id },
        });
        if (!category)
            throw new Error(errors_message_1.ERROR_MESSAGE.CATEGORY_ERROR);
        return category;
    }
    async updateCategory(category, updateCategory) {
        if (updateCategory.name !== undefined)
            category.name = updateCategory.name;
        return await this.save(category);
    }
    async deleteCategory(category) {
        return await this.remove(category);
    }
};
exports.CategoryRepository = CategoryRepository;
exports.CategoryRepository = CategoryRepository = __decorate([
    (0, typeorm_1.EntityRepository)(category_entity_1.Category)
], CategoryRepository);
//# sourceMappingURL=category.repository.js.map