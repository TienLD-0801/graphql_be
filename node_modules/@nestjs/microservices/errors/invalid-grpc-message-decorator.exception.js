"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidGrpcDecoratorException = void 0;
const runtime_exception_1 = require("@nestjs/core/errors/exceptions/runtime.exception");
/**
 * @publicApi
 */
class InvalidGrpcDecoratorException extends runtime_exception_1.RuntimeException {
    constructor(metadata) {
        super(`The invalid gRPC decorator (method "${metadata.rpc}" in service "${metadata.service}")`);
    }
}
exports.InvalidGrpcDecoratorException = InvalidGrpcDecoratorException;
