import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type CartCreateInput = {
  user?: UserWhereUniqueInput | null;
};
