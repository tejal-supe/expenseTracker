import express from "express"
import { users } from "../dummyData/data";

const userResolver = {
  Query: {
    users: (_:any,d:any,{req,res}:any) => {
      return users;
    },
    //parents, args, context,info
    user:(_:any,userId:any)=>{
      return users.find((u:any) =>u._id == userId.userId);
    },
  },
  Mutation: {},
};
export default userResolver;