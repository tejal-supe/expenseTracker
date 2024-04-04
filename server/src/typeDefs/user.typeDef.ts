const userTypeDef =`#graphql
type User{
    _id:ID,
    username:String!
    name:String!
    password:String!
    profileImage:String
    gender:String!
}

type Query{
    users:[User!]
    authUser:User
    user(userId:ID!):User
}

type Mutation{
    signUp(input:SignUpInput!):User
    login(input:LoginInput!):User
    logOut:LogOutResponse
}

input SignUpInput{
    username:String!
    name:String!
    password:String!
    gender:String!
}

input LoginInput{
    username:String!
    password:String!
}

type LogOutResponse{
    message:String!
}
`
export default userTypeDef