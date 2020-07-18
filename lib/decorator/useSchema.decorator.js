"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function UseSchema(schema) {
    return function (constructor) {
        constructor.prototype.schema = schema;
    };
}
exports.UseSchema = UseSchema;
