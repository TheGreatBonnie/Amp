import { DescWhereInput } from "./DescWhereInput";
import { DescOrderByInput } from "./DescOrderByInput";

export type DescFindManyArgs = {
  where?: DescWhereInput;
  orderBy?: Array<DescOrderByInput>;
  skip?: number;
  take?: number;
};
