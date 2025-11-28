import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [RestaurantController],
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
