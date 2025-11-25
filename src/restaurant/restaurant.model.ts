// src/restaurant/restaurant.model.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Restaurant {
  @Field(() => Int)
  id: number;

  @Field()
  name: string;

  @Field()
  address: string;

  @Field()
  phone: string;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
