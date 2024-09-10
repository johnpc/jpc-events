import { defineBackend, defineFunction } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { getEvents, getCurrentDate } from "./function/resource";
import { Function } from "aws-cdk-lib/aws-lambda";
import dotenv from "dotenv";
dotenv.config();

const authFunction = defineFunction({
  entry: "./data/custom-authorizer.ts",
});

/**
 * @see https://docs.amplify.aws/react/build-a-backend/ to add storage, functions, and more
 */
const backend = defineBackend({
  auth,
  data: data(authFunction),
  getEvents,
  getCurrentDate,
  authFunction,
});

const underlyingAuthLambda = backend.authFunction.resources.lambda as Function;
underlyingAuthLambda.addEnvironment(
  "ADMIN_API_KEY",
  process.env.ADMIN_API_KEY!,
);
