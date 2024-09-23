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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./product.entity");
const errors_message_1 = require("../theme/errors-message");
const product_repository_1 = require("./product.repository");
let ProductService = class ProductService {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async create(createProductDto) {
        try {
            const product = new product_entity_1.Product();
            product.name = createProductDto.name;
            product.description = createProductDto.description;
            product.price = createProductDto.price;
            const savedProduct = await this.productRepository.createProduct(product);
            const productDTO = {
                id: savedProduct.id,
                name: savedProduct.name,
                description: savedProduct.description,
                price: savedProduct.price,
            };
            return productDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.CREATE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_CREATE_ERROR);
        }
    }
    async findAll() {
        try {
            const product = await this.productRepository.getProductList();
            return product.map((product) => ({
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
            }));
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.LIST_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.LIST_ERROR);
        }
    }
    async findOne(product) {
        try {
            const productDTO = {
                id: product.id,
                name: product.name,
                description: product.description,
                price: product.price,
            };
            return productDTO;
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.NOTFOUND_ERROR);
        }
    }
    async update(product, updateProductDto) {
        try {
            const updateProduct = await this.productRepository.updateProduct(product, updateProductDto);
            return {
                id: updateProduct.id,
                name: updateProduct.name,
                description: updateProduct.description,
                price: updateProduct.price,
            };
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.UPDATE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.FAILD_UPDATE_ERROR);
        }
    }
    async remove(product) {
        try {
            await this.productRepository.deleteProduct(product);
        }
        catch (error) {
            console.error(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR, error.message);
            throw new common_1.InternalServerErrorException(errors_message_1.ERROR_MESSAGE.REMOVE_ERROR);
        }
    }
};
exports.ProductService = ProductService;
exports.ProductService = ProductService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(product_repository_1.ProductRepository)),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository])
], ProductService);
//# sourceMappingURL=product.service.js.map