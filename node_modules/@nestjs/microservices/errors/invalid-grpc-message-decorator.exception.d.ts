import { RuntimeException } from '@nestjs/core/errors/exceptions/runtime.exception';
export interface RpcDecoratorMetadata {
    service: string;
    rpc: string;
    streaming: string;
}
/**
 * @publicApi
 */
export declare class InvalidGrpcDecoratorException extends RuntimeException {
    constructor(metadata: RpcDecoratorMetadata);
}
