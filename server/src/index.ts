import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import mergedResolvers from "./resolvers/index";
import mergeTypeDef from "./typeDefs";

// const app =express;
const server = new ApolloServer({
  typeDefs:mergeTypeDef,
  resolvers: mergedResolvers,
});

const fun = async () => {
  // const  url  = await startStandaloneServer(server);
  // return url;
};
let u = fun()

console.log(`Server is running at ${u}`);
