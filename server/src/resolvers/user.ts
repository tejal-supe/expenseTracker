import { users } from "../dummyData/data";

const userResolver = {
  Query: {
    users: () => {
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