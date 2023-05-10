import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DescService } from "./desc.service";
import { DescControllerBase } from "./base/desc.controller.base";

@swagger.ApiTags("descs")
@common.Controller("descs")
export class DescController extends DescControllerBase {
  constructor(protected readonly service: DescService) {
    super(service);
  }
}
