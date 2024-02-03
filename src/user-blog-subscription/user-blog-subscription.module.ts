import { Module } from '@nestjs/common';
import { UserBlogSubscriptionService } from './user-blog-subscription.service';
import { UserBlogSubscriptionController } from './user-blog-subscription.controller';
import { type } from 'os';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserBlogSubscription } from './entities/user-blog-subscription.entity';
import { UserModule } from 'src/user/user.module';
import { User } from 'src/user/user.entity';
import { Blog } from 'src/blog/entities/blog.entity';
import { BlogModule } from 'src/blog/blog.module';

@Module({
  imports:[
    TypeOrmModule.forFeature([UserBlogSubscription,User,Blog]),
    
    UserModule,
    BlogModule
  ],
  controllers: [UserBlogSubscriptionController],
  providers: [UserBlogSubscriptionService],
  exports:[UserBlogSubscriptionService]
})
export class UserBlogSubscriptionModule {}
