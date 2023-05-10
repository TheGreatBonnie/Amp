import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DescServiceBase } from "./base/desc.service.base";

@Injectable()
export class DescService extends DescServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
