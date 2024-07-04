import { StringFilter } from "../../util/StringFilter";
import { PaymentListRelationFilter } from "../payment/PaymentListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  id?: StringFilter;
  payments?: PaymentListRelationFilter;
  paymentStatus?: "Option1";
  totalAmount?: FloatNullableFilter;
  user?: UserWhereUniqueInput;
};
