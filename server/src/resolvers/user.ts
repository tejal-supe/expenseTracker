import express, { Request, Response } from "express"
import bcrypt from "bcryptjs"

import { users } from "../dummyData/data";
import { PrismaClient } from "@prisma/client";
import { PassportContext } from "graphql-passport";

type User = {
  username:string,
  name:string,
  password:string,
  gender:string,
  profileImage:string | null
}

interface MyContext extends PassportContext<User, Request>{}

const prisma = new PrismaClient();

const userResolver = {
  Query: {
    authUser: () => {
      
    },
    //parents, args, context,info
    user:(_:any,userId:any)=>{
      return users.find((u:any) =>u._id == userId.userId);
    },
  },
  Mutation: {
    signUp:async(_:any,{input}:any,context:MyContext)=>{
try {
  const {username,password,gender,name} = input
  if(!username || !password || !gender || !name){
    throw new Error("All Fields are required")
  }
  const existingUser = await prisma.user.findUnique({
    where:{
      username:username
    }
  })
  if(existingUser){
    throw new Error("Username already Exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password,salt);
  const boyProfile = "https://avatar.iran.liara.run/public/boy";
  const girlProfile = "https://avatar.iran.liara.run/public/girl";

  const newUser = await prisma.user.create({
    data:{
      username:username,
      password:hashedPassword,
      gender:gender,
      name:name,
      profileImage:gender=="male"?boyProfile:girlProfile 

    }
  })
  console.log(newUser,'new user');
  await context.login(newUser);
  return newUser; 
} catch (error:any) {
  throw new Error(error.message || "Internal server error");
}
    },
    login:async(_:any,{input}:any,context:any)=>{
        try {
          const {username,password} = input;
          if(!username || !password){
            throw new Error("Please enter the details");
          }
          const { user } = await context.authenticate("graphql-local", { username, password })
          await context.login(user);
          return user;
        } catch (error:any) {
          throw new Error(error.message || "Internal server error")
        }
    },
    logOut: async (parent:any,_:any,context:any) => {
      try {
        await context.logOut();
        context.req.session.destroy((err:any) => {
          if (err) throw err;
        });
        context.res.clearCookie("connect.sid")
        return {message:"Logged out successfully"}

      } catch (error : any) {
        throw new Error(error.message || "Internal Server Error")
      }
    }
  },
};
export default userResolver;