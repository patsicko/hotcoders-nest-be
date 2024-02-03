import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserBlogSubscriptionService } from './user-blog-subscription.service';
import { CreateUserBlogSubscriptionDto } from './dto/create-user-blog-subscription.dto';
import { UpdateUserBlogSubscriptionDto } from './dto/update-user-blog-subscription.dto';

@Controller('user-blog-subscription')
export class UserBlogSubscriptionController {
  constructor(private readonly userBlogSubscriptionService: UserBlogSubscriptionService) {}

  @Post()
  create(
    @Body("userId") userId:number,
    @Body("blogId") blogId:number
  ) {
    return this.userBlogSubscriptionService.create(userId,blogId);
  }

  @Get()
  findAll() {
    return this.userBlogSubscriptionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userBlogSubscriptionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserBlogSubscriptionDto: UpdateUserBlogSubscriptionDto) {
    return this.userBlogSubscriptionService.update(+id, updateUserBlogSubscriptionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userBlogSubscriptionService.remove(+id);
  }
}
