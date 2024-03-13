import { Module } from '@nestjs/common';
import { SystemResolver } from './system.resolver';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver } from '@nestjs/apollo';
import { SharedModule } from '@app/common';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      typePaths: ['./**/*.graphql'],
    }),
    SharedModule.registerRmq('USER_SERVICE', process.env.RABBITMQ_USER_QUEUE),
  ],
  providers: [SystemResolver],
})
export class SystemModule {}
