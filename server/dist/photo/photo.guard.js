"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetId = void 0;
const common_1 = require("@nestjs/common");
exports.GetId = (0, common_1.createParamDecorator)((data, context) => {
    const requst = context.switchToHttp().getRequest();
    const photo = requst.photo;
    return data ? photo && photo[data] : photo;
});
//# sourceMappingURL=photo.guard.js.map