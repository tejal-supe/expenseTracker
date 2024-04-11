import passport from "passport";
import bcrypt from "bcryptjs";
import { GraphQLLocalStrategy } from "graphql-passport";

import { PrismaClient } from "@prisma/client";
const user = new PrismaClient();

declare global {
  namespace Express {
    interface User {
      username: string;
      id?: string;
    }
  }
}

export const configPassport = async () => {
  passport.serializeUser((user: Express.User, done) => {
    console.log(user);

    done(null, user.id);
  });
  passport.deserializeUser(async (id: string, done) => {
    try {
      const getUser = await user.user.findUnique({
        where: {
          id: id,
        },
      });
      done(null,getUser)
    } catch (error) {
      done(error);
    }
  });
  passport.use(
    new GraphQLLocalStrategy(async(username,password,done)=>{
        try {
            const getData = await user.user.findUnique({
                where:{
                    username:username as string,
                }
            })
            if(!getData){
             throw new Error("User not found")
                
            }
            const validPassword = await bcrypt.compare(password as string,getData.password)
            if(!validPassword){
                throw new Error("Password does not match")
            }
        } catch (error) {
           return done(error);
        }
    })
  )
};
