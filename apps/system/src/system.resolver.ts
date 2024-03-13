import { Inject } from '@nestjs/common';
import { Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';

@Resolver()
export class SystemResolver {
  constructor(
    @Inject('USER_SERVICE') private readonly authService: ClientProxy,
  ) {}

  @Query('getHello')
  async getHello() {
    console.log('vo day truoc');
    const a = this.authService.send('get-users', '');
    return a;
  }
}
