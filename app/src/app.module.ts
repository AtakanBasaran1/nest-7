import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoryService } from './category/category.service';
import { CategoryController } from './category/category.controller';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [AppController, CategoryController],
  providers: [AppService, CategoryService, PrismaService],
})
export class AppModule {}
