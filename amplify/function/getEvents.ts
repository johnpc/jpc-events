import type { Schema } from "../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/api";
import { env } from "$amplify/env/getEvents";
import { listEventByYear } from "./queries";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "identityPool",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  },
);
const client = generateClient<Schema>();

export const handler: Schema["getEvents"]["functionHandler"] = async () => {
  const events = await client.graphql({
    query: listEventByYear,
    variables: {
      year: parseInt(new Date().toLocaleString("en-US", { year: "numeric" })),
    },
  });
  console.log({ events: events.data.listEventByYear.items });
  return { value: JSON.stringify(events.data.listEventByYear.items) };
};
