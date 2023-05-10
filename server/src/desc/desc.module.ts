import { Module } from "@nestjs/common";
import { DescModuleBase } from "./base/desc.module.base";
import { DescService } from "./desc.service";
import { DescController } from "./desc.controller";
import { DescResolver } from "./desc.resolver";

@Module({
  imports: [DescModuleBase],
  controllers: [DescController],
  providers: [DescService, DescResolver],
  exports: [DescService],
})
export class DescModule {}
