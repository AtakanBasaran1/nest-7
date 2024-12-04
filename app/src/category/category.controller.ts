import { Controller, Get, Param } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) { }

    @Get(':category_name')
    async getDescription(@Param('category_name') category_name: string) {
        const description = await this.categoryService.getCategoryToDescription(category_name)
        return { description }
    }
}
