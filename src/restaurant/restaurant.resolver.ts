import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { RestaurantService } from './restaurant.service';
import { Restaurant } from './restaurant.model';
import { CreateRestaurantInput } from './dto/create-restaurant.input';
import { UpdateRestaurantInput } from './dto/update-restaurant.input';

@Resolver(() => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}

  @Query(() => [Restaurant], { name: 'restaurants' })
  findAll() {
    return this.restaurantService.findAll();
  }

  @Query(() => Restaurant, { name: 'restaurant', nullable: true })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.restaurantService.findOne(id);
  }

  @Mutation(() => Restaurant)
  createRestaurant(
    @Args('input')
    input: CreateRestaurantInput,
  ) {
    return this.restaurantService.create(input);
  }

  @Mutation(() => Restaurant)
  updateRestaurant(
    @Args('input')
    input: UpdateRestaurantInput,
  ) {
    const { id, ...data } = input;
    return this.restaurantService.update(id, data);
  }

  @Mutation(() => Boolean)
  async removeRestaurant(
    @Args('id', { type: () => Int }) id: number,
  ): Promise<boolean> {
    await this.restaurantService.remove(id);
    return true;
  }
}
