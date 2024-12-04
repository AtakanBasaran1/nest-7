import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CategoryService {
    constructor(private prisma: PrismaService) { }

    async getCategoryToDescription(category_name: string) {
        const category = await this.prisma.category.findUnique({
            where: { category_name },
            select: { description: true }
        })
        return category ? category.description : null
    }
}
