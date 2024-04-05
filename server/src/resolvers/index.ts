import {mergeResolvers} from "@graphql-tools/merge";

import userResolver from "./user";
import transactionResolver from "./transaction"

const mergedResolver = mergeResolvers([userResolver,transactionResolver]) as any;

export default mergedResolver;