import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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

}