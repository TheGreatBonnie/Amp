/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateDescArgs } from "./CreateDescArgs";
import { UpdateDescArgs } from "./UpdateDescArgs";
import { DeleteDescArgs } from "./DeleteDescArgs";
import { DescFindManyArgs } from "./DescFindManyArgs";
import { DescFindUniqueArgs } from "./DescFindUniqueArgs";
import { Desc } from "./Desc";
import { DescService } from "../desc.service";
@graphql.Resolver(() => Desc)
export class DescResolverBase {
  constructor(protected readonly service: DescService) {}

  async _descsMeta(
    @graphql.Args() args: DescFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @graphql.Query(() => [Desc])
  async descs(@graphql.Args() args: DescFindManyArgs): Promise<Desc[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Desc, { nullable: true })
  async desc(@graphql.Args() args: DescFindUniqueArgs): Promise<Desc | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Desc)
  async createDesc(@graphql.Args() args: CreateDescArgs): Promise<Desc> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Desc)
  async updateDesc(@graphql.Args() args: UpdateDescArgs): Promise<Desc | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Desc)
  async deleteDesc(@graphql.Args() args: DeleteDescArgs): Promise<Desc | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}
