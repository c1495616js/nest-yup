"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const common_1 = require("@nestjs/common");
/**
 * Handle Error Message
 * @param err
 */
const serializeValidationError = (err) => {
    const invalid = err.inner.map(({ path, message }) => ({
        path,
        message,
    }));
    return invalid;
};
let YupValidationPipe = class YupValidationPipe {
    async transform(value, { metatype }) {
        var _a;
        const { schema } = (_a = metatype) === null || _a === void 0 ? void 0 : _a.prototype;
        if (!schema)
            return value;
        try {
            await schema.validate(value, { abortEarly: false });
        }
        catch (err) {
            throw new common_1.BadRequestException(serializeValidationError(err));
        }
        return value;
    }
};
YupValidationPipe = tslib_1.__decorate([
    common_1.Injectable()
], YupValidationPipe);
exports.YupValidationPipe = YupValidationPipe;
