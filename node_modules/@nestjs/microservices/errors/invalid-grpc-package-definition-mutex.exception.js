"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidGrpcPackageDefinitionMutexException = void 0;
const runtime_exception_1 = require("@nestjs/core/errors/exceptions/runtime.exception");
class InvalidGrpcPackageDefinitionMutexException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(`Invalid gRPC configuration. Both protoPath and packageDefinition cannot be defined at the same time.`);
    }
}
exports.InvalidGrpcPackageDefinitionMutexException = InvalidGrpcPackageDefinitionMutexException;
