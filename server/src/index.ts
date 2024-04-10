import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import {  buildContext } from "graphql-passport";
import http from "http";
import cors from "cors";
import dotenv from "dotenv";
import passport from "passport";
import session from "express-session";
import connectMongo from "connect-mongodb-session";

import mergedResolver from "./resolvers/index";
import mergeTypeDef from "./typeDefs";

interface MyContext {
  token?: string;
}

const startServer = async () => {
  const app = express();
  dotenv.config();
  const httpServer = http.createServer(app);

  const MongoDbStore = connectMongo(session);
  const store = new MongoDbStore({
    uri: process.env.DATABASE_URL as string,
    collection: "sessions",
  });
  store.on("error", (err: any) => console.log(err));
  app.use(
    session({
      secret: process.env.SECRET as string,
      resave: false,
      saveUninitialized: false,
      cookie: {
        maxAge: 1000 * 60 * 60 * 24 * 7,
        httpOnly: true,
      },
      store: store,
    })
  );
app.use(passport.initialize())
app.use(passport.session());
  const server = new ApolloServer<MyContext>({
    typeDefs: mergeTypeDef,
    resolvers: mergedResolver,
    plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
  });

  await server.start();

  app.use(
    "/",
    cors<cors.CorsRequest>(
    {  origin: "http://localhost:3000",
      credentials:true,
}
    ),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req ,res}) => buildContext({req,res}),
    })
  );

  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  );
  console.log(`🚀 Server ready at http://localhost:4000/`);
};

startServer().catch((error) => {
  console.error("Error starting server:", error);
  process.exit(1);
});
