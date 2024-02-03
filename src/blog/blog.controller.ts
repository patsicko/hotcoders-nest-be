import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BlogService } from './blog.service';
import { CreateBlogDto } from './dto/create-blog.dto';
import { UpdateBlogDto } from './dto/update-blog.dto';
import { Blog } from './entities/blog.entity';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post("create")
  create(@Body() createBlogDto: CreateBlogDto):Promise<Blog> {
    const blog = new Blog();
    blog.coverImage= createBlogDto.coverImage;
    blog.blogTitle= createBlogDto.blogTitle;
    blog.blogPrice = createBlogDto.blogPrice;
    blog.blogDescription= createBlogDto.blogDescription;
    blog.blogContent=createBlogDto.blogContent;

    return this.blogService.create(blog);
    
  }

  @Get("getAll")
  findAll() {
    return this.blogService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.blogService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateBlogDto: UpdateBlogDto) {
    return this.blogService.update(+id, updateBlogDto);
  }

  @Delete('delete/:id')
  remove(@Param('id') id: string) {
    return this.blogService.remove(+id);
  }
}
