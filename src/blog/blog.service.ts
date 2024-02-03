import { Injectable } from '@nestjs/common';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Blog } from './entities/blog.entity';

@Injectable()
export class BlogService {

  constructor(@InjectRepository(Blog) private readonly blogRepository:Repository<Blog>){}

  async create(blog:Blog):Promise<Blog> {
    return await this.blogRepository.save(blog);
  }

  async findAll():Promise<Blog[]> {
    return await this.blogRepository.find()
  }

 async findOne(id: number):Promise<Blog> {
    return await this.blogRepository.findOne({where:{id}});
  }

 async update(id: number, updateBlogDto: UpdateBlogDto):Promise<any> {
    return await this.blogRepository.update(id,updateBlogDto);
  }

  async remove(id: number):Promise<void> {
     await this.blogRepository.delete({id});
  }
}
