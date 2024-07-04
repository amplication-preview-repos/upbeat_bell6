import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartWhereInput = {
  id?: StringFilter;
  user?: UserWhereUniqueInput;
};
