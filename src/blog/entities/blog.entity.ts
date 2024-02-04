import { UserBlogSubscription } from "src/user-blog-subscription/entities/user-blog-subscription.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Blog {
    @PrimaryGeneratedColumn()
    id:number;
    @Column({ nullable: true, type: "text", default: null })
    coverImage: any;
    @Column()
    blogTitle:string;
    @Column()
    blogPrice:string;
    @Column()
    blogDescription:string;
    @Column()
    blogContent:string;

    @OneToMany(()=>UserBlogSubscription, subscription=>subscription.blog,{ onDelete: 'CASCADE' })
    userSubscriptions:UserBlogSubscription[]
}
