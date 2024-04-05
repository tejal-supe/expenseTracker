import express from "express";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import {expressMiddleware} from "@apollo/server/express4"
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import http from "http";
import cors from "cors"

import mergedResolver from "./resolvers/index";
import mergeTypeDef from "./typeDefs";

interface MyContext {
  token?: string;
}

const startServer = async () => {
  const app = express();
  const httpServer = http.createServer(app);

  const server = new ApolloServer<MyContext>({
    typeDefs: mergeTypeDef,
    resolvers: mergedResolver,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
  });

  await server.start();

  app.use(
    '/',
    cors<cors.CorsRequest>(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({ token: req.headers.token }),
    }),
  );

  await new Promise<void>((resolve) => httpServer.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000/`);
};

startServer().catch((error) => {
  console.error('Error starting server:', error);
  process.exit(1);
});