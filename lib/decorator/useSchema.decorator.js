"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UseSchema = void 0;
function UseSchema(schema) {
    return function (constructor) {
        constructor.prototype.schema = schema;
    };
}
exports.UseSchema = UseSchema;
