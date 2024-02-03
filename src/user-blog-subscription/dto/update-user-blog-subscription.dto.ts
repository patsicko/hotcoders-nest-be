import { PartialType } from '@nestjs/mapped-types';
import { CreateUserBlogSubscriptionDto } from './create-user-blog-subscription.dto';

export class UpdateUserBlogSubscriptionDto extends PartialType(CreateUserBlogSubscriptionDto) {}
