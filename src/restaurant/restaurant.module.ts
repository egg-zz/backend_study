import { Module } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { RestaurantController } from './restaurant.controller'; // REST 유지할 거면 남겨두기
import { PrismaModule } from '../prisma/prisma.module';
import { RestaurantResolver } from './restaurant.resolver';

@Module({
  imports: [PrismaModule],
  controllers: [RestaurantController], // REST 안 쓸 거면 이 줄 제거해도 됨
  providers: [RestaurantService, RestaurantResolver],
})
export class RestaurantModule {}
