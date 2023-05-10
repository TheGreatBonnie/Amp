import * as graphql from "@nestjs/graphql";
import { DescResolverBase } from "./base/desc.resolver.base";
import { Desc } from "./base/Desc";
import { DescService } from "./desc.service";

@graphql.Resolver(() => Desc)
export class DescResolver extends DescResolverBase {
  constructor(protected readonly service: DescService) {
    super(service);
  }
}
