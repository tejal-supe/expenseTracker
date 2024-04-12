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
          if(!context.getUser()) throw new Error("User not authorized")
            const userId = context.getUser()?.id
          // console.log(userId,context.getUser(),'trans');
          // return "hi"
          const transaction = await prisma.transaction.findFirst({
            where:{
              userId:userId as string
            }
          })
          return transaction;
        } catch (error:any) {
          console.log(error,'in transaction query');
          throw new Error(error.message || "Internal Server error")
        }
    },
    transaction:async(parent:any,{transactionId}:any,context:any)=>{
      try {
        if(!context.getUser()) throw new Error("User not authorized");
        const transaction = await prisma.transaction.findUnique({
          where:{
            id:transactionId
          }
        })
        return transaction;
      } catch (error:any) {
        console.log(error,"Error in the transaction query");
        throw new Error(error.message || "Internal server error");
      } 
    }
  },
  Mutation: {
    createTransaction: async (_: any, { input }: any) => {
      try {
        const {amount,paymentType,category,desc} = input;
        const transaction = await prisma.transaction.create({
          data:{
            amount:amount,
            paymentType:paymentType,
          category:category,
          desc:desc,
          userId:"66177495d861a47d59321f1e", //context.getUser().userId
          }
        })
        return transaction;
      } catch (error: any) {
        console.log(error, "Error in createTransaction Mutation");
        throw new Error(error.message || "Internal Server Error");
      }
    },
    updateTransaction:async(_:any,{input}:any)=>{
      try {
        const updatedTransaction = await prisma.transaction.update({
          where:{
            id:input.transactionId
          },
          data:{
            ...input
          }
        })
        return updatedTransaction;
      } catch (error:any) {
        console.error(error,"Error in update transaction mutation");
        throw new Error(error.message || "Internal server error");
        
      }
    },
    deleteTransaction:async(_:any,{input}:any)=>{
      try {
        const deletedTransaction = await prisma.transaction.delete({
          where:{
            id:input.transactionId
          }
        })
        return deletedTransaction;
      } catch (error:any) {
        console.error(error,"Error in update transaction mutation");
        throw new Error(error.message || "Internal server error");

      }
    }
  },
};
export default transactionResolver;
