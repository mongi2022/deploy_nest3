import { Body, Controller, Delete, Get, Param, Post, Put, UploadedFile, UploadedFiles, UseGuards, UseInterceptors } from "@nestjs/common";
import { FileInterceptor, FilesInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { AccessTokenGuard } from "src/common/guards/accessToken.guard";
import { GalleryDTO } from "./dto/gallery.dto";
import { GalleryService } from "./gallery.service";
import { editFileName } from "./utils/editFileName";
import { imageFileFilter } from "./utils/imageFileFilter";
import { readFile } from 'fs';
import { promisify } from 'util';
const readFileAsyc = promisify(readFile);
import * as sharp from 'sharp';
import * as fs from 'fs'
@Controller('gallery')
export class GalleryController{
  constructor(private readonly galleryService:GalleryService){}
 
    sizes = [[1366,905], [640,424],[240,159]];

@Get()
  getAllGallery(){
    return this.galleryService.getAllGallery()
  }

  @Get(':id')
  getGalleryById(@Param('id')id:number){
    return this.galleryService.getGalleryById(id)
  }

  @Post('upload/:id')
    @UseInterceptors(
      FilesInterceptor('file[]', 8, {
        storage: diskStorage({
          filename: editFileName,
          
        }),
        fileFilter: imageFileFilter,
      }),
    )
  uploadFile(@UploadedFiles() files,@Param('id') id:number){
    const response = [];
    files.forEach(file => {
    const [, ext] = file.mimetype.split('/');
    this.saveOneImage(ext, file,id);
    response.push(file);
   
 
    })
    return response; 
  }



  private async saveOneImage(ext: string,file,id:number): Promise<void> {
    
    if (['jpeg', 'jpg', 'png','gif','webp'].includes(ext)) {
      this.sizes.forEach((s: [number,number]) => {
        const width = s[0]
       const height=s[1]
       var filename=''
      
        
        if(s[0]==1366) {
          var dir=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}`
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
          filename=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}/big-${s[0]}-${file.originalname}`
       
      }
        if(s[0]==640) {
          var dir=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}`
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
          filename=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}/medium-${s[0]}-${file.originalname}`
   
        }
        if(s[0]==240) {
          var dir=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}`
          if (!fs.existsSync(dir)){
            fs.mkdirSync(dir, { recursive: true });
        }
          filename=`/home/tpc/Bureau/PROJET_TEST/NODEJS/real-estate-front/real-estate-front/src/assets/images/${id}/small-${s[0]}-${file.originalname}`
     
      
        }
    //    console.log(filename);
     //  console.log(height);
        
        readFileAsyc(file.path)
          .then((b: Buffer) => {
            return sharp(b)
             .resize({
              width: width,
              height: height
            }) 

            //  .resize(width)
              .toFile(
                filename,
              );
          })
          .then()
          .catch(console.error);
         
        });
        
    }
   
  }



  @Post('property/:id')
  createGallery(@Param('id') id:number, @Body()galleryDTO:GalleryDTO){
    return this.galleryService.createGallery(id,galleryDTO)
  }


  @Put(':id')
  updateGallery(@Param('id')id:number,@Body()galleryDTO:GalleryDTO){
    return this.galleryService.updateGallery(id,galleryDTO)
  }

  @Delete(':id')
    deleteGallery(@Param('id')id:number){
      return this.galleryService.deleteGallery(id)
    

  }
}