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
exports.CategoryController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("./category.service");
const create_category_dto_1 = require("./dto/create-category.dto");
const update_category_dto_1 = require("./dto/update-category.dto");
const category_entity_1 = require("./category.entity");
const category_decorator_1 = require("./category.decorator");
const category_guard_1 = require("./category.guard");
let CategoryController = class CategoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(createCategoryDto) {
        return this.categoryService.create(createCategoryDto);
    }
    async findAll() {
        return this.categoryService.findAll();
    }
    async findOne(category) {
        return this.categoryService.findOne(category);
    }
    async update(category, updateCategoryDto) {
        return this.categoryService.update(category, updateCategoryDto);
    }
    async remove(category) {
        return this.categoryService.remove(category);
    }
};
exports.CategoryController = CategoryController;
__decorate([
    (0, common_1.Post)('/'),
    (0, common_1.UsePipes)(new common_1.ValidationPipe()),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':categoryId'),
    (0, common_1.UseGuards)(category_guard_1.CategoryGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':categoryId'),
    (0, common_1.UseGuards)(category_guard_1.CategoryGuard),
    __param(0, (0, category_decorator_1.GetId)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.Category,
        update_category_dto_1.UpdateCategoryDto]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':categoryId'),
    (0, common_1.UseGuards)(category_guard_1.CategoryGuard),
    __param(0, (0, category_decorator_1.GetId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_entity_1.Category]),
    __metadata("design:returntype", Promise)
], CategoryController.prototype, "remove", null);
exports.CategoryController = CategoryController = __decorate([
    (0, common_1.Controller)('category'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryController);
//# sourceMappingURL=category.controller.js.map