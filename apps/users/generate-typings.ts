import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['apps/users/src/**/*.graphql'],
  path: join(process.cwd(), 'apps/users/src/schema/graphql.ts'),
  outputAs: 'class',
});
