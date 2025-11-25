import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';

@Injectable()
export class RestaurantService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateRestaurantDto) {
    return this.prisma.restaurant.create({ data });
  }

  findAll() {
    return this.prisma.restaurant.findMany();
  }

  findOne(id: number) {
    return this.prisma.restaurant.findUnique({ where: { id } });
  }

  update(id: number, data: UpdateRestaurantDto) {
    return this.prisma.restaurant.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.restaurant.delete({ where: { id } });
  }
}
