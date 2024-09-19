"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
const typeorm_1 = require("typeorm");
const product_entity_1 = require("./product.entity");
let ProductRepository = class ProductRepository extends typeorm_1.Repository {
    async createProduct(createProductDto) {
        const product = new product_entity_1.Product();
        product.name = createProductDto.name;
        product.description = createProductDto.description;
        product.price = createProductDto.price;
        return await this.save(product);
    }
    async getProductList() {
        return await this.find({
            order: {
                id: 'DESC',
            },
        });
    }
    async getProduct(id) {
        const product = await this.findOne({ where: { id } });
        if (!product) {
            throw new Error(`Product with id not found`);
        }
        return product;
    }
    async updateProduct(product, updateProduct) {
        if (updateProduct.name !== undefined)
            product.name = updateProduct.name;
        if (updateProduct.description !== undefined)
            product.description = updateProduct.description;
        if (updateProduct.price !== undefined)
            product.price = updateProduct.price;
        return await this.save(product);
    }
    async deleteProduct(product) {
        return await this.remove(product);
    }
};
exports.ProductRepository = ProductRepository;
exports.ProductRepository = ProductRepository = __decorate([
    (0, typeorm_1.EntityRepository)(product_entity_1.Product)
], ProductRepository);
//# sourceMappingURL=product.repository.js.map