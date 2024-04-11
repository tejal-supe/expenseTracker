import { PassportContext } from "graphql-passport";
import { PrismaClient } from "@prisma/client";

type Transaction = {
  userId: String;
  amount: Number;
  paymentType: String;
  category: String;
  desc: String;
};
interface MyContext extends PassportContext<Transaction, Request> {}

const prisma = new PrismaClient();
const transactionResolver = {
  Query: {
    transactions:async(parent:any,_:any,context:any)=>{
        try {
          // if(!context.getUser()) throw new Error("User not authorized")
            const userId = context.getUser()?.id
          console.log(userId,context.getUser(),'trans');
          return "hi"
          
          // const transaction = await prisma.transaction.findUnique({
          //   where:{
          //     userId:userId as string
          //   }
          // })
        } catch (error) {
          console.log(error,'in transaction query');
          
        }
    }
  },
  Mutation: {
    createTransaction: async (_: any, { input }: any, context: MyContext) => {
      try {
        const {amount,paymentType,category,desc} = input;
        const transaction = await prisma.transaction.create({
          data:{
            amount:amount,
            paymentType:paymentType,
          category:category,
          desc:desc,
          userId:"66177495d861a47d59321f1e", //context.getUser().id
          }
        })
        return transaction;
      } catch (error: any) {
        console.log(error, "Error in createTransaction Mutation");
        throw new Error(error.message || "Internal Server Error");
      }
    },
  },
};
export default transactionResolver;
