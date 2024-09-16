"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetId = void 0;
const common_1 = require("@nestjs/common");
exports.GetId = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    const product = request.product;
    return data ? product && product[data] : product;
});
//# sourceMappingURL=product.decorator.js.map