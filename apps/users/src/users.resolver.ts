import { SharedService } from '@app/common';
import { UsersService } from './users.service';
import { Query, Resolver } from '@nestjs/graphql';
import { Ctx, MessagePattern, RmqContext } from '@nestjs/microservices';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private readonly sharedService: SharedService,
  ) {}

  @Query('getUser')
  @MessagePattern('get-users')
  async getUser(@Ctx() context: RmqContext) {
    console.log('tienld', context);
    this.sharedService.acknowledgeMessage(context);
    return this.usersService.getUser();
  }
}
