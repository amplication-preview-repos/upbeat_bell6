import { Payment } from "../payment/Payment";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  id: string;
  payments?: Array<Payment>;
  paymentStatus?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
  user?: User | null;
};
