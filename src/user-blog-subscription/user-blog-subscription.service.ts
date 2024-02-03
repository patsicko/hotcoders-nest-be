import { Injectable } from '@nestjs/common';
import { CreateUserBlogSubscriptionDto } from './dto/create-user-blog-subscription.dto';
import { UpdateUserBlogSubscriptionDto } from './dto/update-user-blog-subscription.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { UserBlogSubscription } from './entities/user-blog-subscription.entity';
import { Repository } from 'typeorm';
import { User } from 'src/user/user.entity';
import { Blog } from 'src/blog/entities/blog.entity';

@Injectable()
export class UserBlogSubscriptionService {

constructor(
  @InjectRepository(UserBlogSubscription) private readonly userBlogSubscriptionRepository:Repository<UserBlogSubscription>,
  @InjectRepository(User) private readonly userRepository:Repository<User>,
  @InjectRepository(Blog) private readonly blogRepository:Repository<Blog>
  ){}

 async create(userId:number,blogId:number) {
    const user = await this.userRepository.findOne({where:{id:userId}});
    const blog = await this.blogRepository.findOne({where:{id:blogId}});
  
    if(user && blog){
     const subscription = new UserBlogSubscription();
      subscription.user=user;
      subscription.blog=blog;
     return  await this.userBlogSubscriptionRepository.save(subscription);
    }

  }

  findAll() {
    return `This action returns all userBlogSubscription`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userBlogSubscription`;
  }

  update(id: number, updateUserBlogSubscriptionDto: UpdateUserBlogSubscriptionDto) {
    return `This action updates a #${id} userBlogSubscription`;
  }

  remove(id: number) {
    return `This action removes a #${id} userBlogSubscription`;
  }
}
