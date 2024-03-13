"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidGrpcPackageDefinitionMissingPackageDefinitionException = void 0;
const runtime_exception_1 = require("@nestjs/core/errors/exceptions/runtime.exception");
class InvalidGrpcPackageDefinitionMissingPackageDefinitionException extends runtime_exception_1.RuntimeException {
    constructor() {
        super(`Invalid gRPC configuration. protoPath or packageDefinition must be defined.`);
    }
}
exports.InvalidGrpcPackageDefinitionMissingPackageDefinitionException = InvalidGrpcPackageDefinitionMissingPackageDefinitionException;
