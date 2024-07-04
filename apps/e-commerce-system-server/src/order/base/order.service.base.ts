/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Order as PrismaOrder,
  Payment as PrismaPayment,
  User as PrismaUser,
} from "@prisma/client";

export class OrderServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.OrderCountArgs, "select">): Promise<number> {
    return this.prisma.order.count(args);
  }

  async orders(args: Prisma.OrderFindManyArgs): Promise<PrismaOrder[]> {
    return this.prisma.order.findMany(args);
  }
  async order(args: Prisma.OrderFindUniqueArgs): Promise<PrismaOrder | null> {
    return this.prisma.order.findUnique(args);
  }
  async createOrder(args: Prisma.OrderCreateArgs): Promise<PrismaOrder> {
    return this.prisma.order.create(args);
  }
  async updateOrder(args: Prisma.OrderUpdateArgs): Promise<PrismaOrder> {
    return this.prisma.order.update(args);
  }
  async deleteOrder(args: Prisma.OrderDeleteArgs): Promise<PrismaOrder> {
    return this.prisma.order.delete(args);
  }

  async findPayments(
    parentId: string,
    args: Prisma.PaymentFindManyArgs
  ): Promise<PrismaPayment[]> {
    return this.prisma.order
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .payments(args);
  }

  async getUser(parentId: string): Promise<PrismaUser | null> {
    return this.prisma.order
      .findUnique({
        where: { id: parentId },
      })
      .user();
  }
}
