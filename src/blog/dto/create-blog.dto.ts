import { isNotEmpty, isString } from "class-validator";

export class CreateBlogDto {
    
    coverImage:any;
    blogTitle:string;
    blogPrice:string;
    blogDescription:string;
    blogContent:string;

}
