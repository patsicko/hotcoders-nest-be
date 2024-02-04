import { Blog } from "src/blog/entities/blog.entity";
import { User } from "src/user/user.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class UserBlogSubscription {
@PrimaryGeneratedColumn()
id:number

@ManyToOne(()=>User,user=>user.blogSubscriptions,{ onDelete: 'CASCADE' })
user:User

@ManyToOne(()=>Blog,blog=>blog.userSubscriptions,{ onDelete: 'CASCADE' })
blog:Blog

}
