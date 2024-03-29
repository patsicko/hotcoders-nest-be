import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import {MomoPaymentResponse} from './momo-payment.dto'
import { error } from 'console';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User) private readonly userRepository:Repository<User>
    ){}

   async getAll():Promise<User[]>{

    return await this.userRepository.find()
   }

  async createUser(user:User):Promise<User>{
    
    return await this.userRepository.save(user)
  }

  async getOne(id: number): Promise<User | undefined> {
    return await this.userRepository.findOne({ 
        where: { id }, 
        relations: ['blogSubscriptions', 'blogSubscriptions.blog'] 
    });
}


  async findByEmail(email:string):Promise<User | undefined>{
    return await this.userRepository.findOne({where:{email},relations: ['blogSubscriptions', 'blogSubscriptions.blog'] })
 }

  async updateUser(id:number,user:User ):Promise<any>{
    return await this.userRepository.update(id,user)
  }

  async adminApprove(id:number):Promise<User>{
    const user= await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new Error('User not found')
    }
    user.adminApproval=true;
   return await this.userRepository.save(user)
  }

  async managerAproval(id:number):Promise<User>{
    const user= await this.userRepository.findOne({where:{id}});
    if(!user){
      throw new Error('User not found')
    }
    user.managerApproval=true;
   return await this.userRepository.save(user)
  }

 async deleteUser(id:number):Promise<void>{
    await this.userRepository.delete({id})
 }




 async updateUserWithMomoPayment(id: number, momoPaymentResponse: MomoPaymentResponse): Promise<User> {
  const user = await this.userRepository.findOne({ where: { id } });

  console.log("user with specified id",user)
  if (!user) {
      throw new Error('User not found');
  }
  user.momoPaymentResponse = JSON.stringify(momoPaymentResponse);
  return await this.userRepository.save(user);
}

async changeRole(id:number, role:string):Promise<User>{
  const user = await this.userRepository.findOne({where:{id}});
  if(!user){
  throw new NotFoundException('User not found')
  }
  user.role=role;
  return await this.userRepository.save(user)
}

}
