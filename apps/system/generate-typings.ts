import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
  typePaths: ['apps/system/src/**/*.graphql'],
  path: join(process.cwd(), 'apps/system/src/schema/graphql.ts'),
  outputAs: 'class',
});
