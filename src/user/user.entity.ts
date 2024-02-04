import { UserBlogSubscription } from "src/user-blog-subscription/entities/user-blog-subscription.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id:number

    @Column()
    firstName:string
    
    @Column()
    lastName:string

    @Column()
    phone:string

    @Column()
    email:string

    @Column({default:'user'})
    role:string
    
    @Column({unique:true})
    password:string

    @Column({ default: false })
    adminApproval: boolean;

    @Column({ default: false })
    managerApproval: boolean;

    @Column({ type: 'json', nullable: true }) 
    momoPaymentResponse?: object | string;

    @OneToMany(()=>UserBlogSubscription,subscription=>subscription.user,{ onDelete: 'CASCADE' })
    blogSubscriptions:UserBlogSubscription[]

}