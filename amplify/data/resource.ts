import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { getCurrentDate, getEvents } from "../function/resource";
import { AmplifyFunction, ConstructFactory } from "@aws-amplify/plugin-types";

const schema = a
  .schema({
    Event: a
      .model({
        id: a.string().required(),
        title: a.string().required(),
        link: a.string().required(),
        description: a.string(),
        date: a.string().required(),
        year: a.integer().required(),
        timestamp: a.string().required(),
        source: a.string().required(),
        rawItem: a.json().required(),
      })
      .authorization((allow) => allow.custom())
      .secondaryIndexes((index) => [index("year")]),

    getEvents: a
      .query()
      .arguments({})
      .returns(a.string())
      .handler(a.handler.function(getEvents))
      .authorization((allow) => allow.authenticated()),

    getCurrentDate: a
      .query()
      .arguments({})
      .returns(a.string())
      .handler(a.handler.function(getCurrentDate))
      .authorization((allow) => allow.authenticated()),

    chat: a.conversation({
      aiModel: a.ai.model("Claude 3.5 Sonnet"),
      systemPrompt: `You are a helpful assistant. You answer in three sentences or less, using simple english words.`,
      tools: [
        {
          query: a.ref("getEvents"),
          description: "Provides events in Ann Arbor, MI.",
        },
        {
          query: a.ref("getCurrentDate"),
          description: "Provides the current day and time",
        },
      ],
      inferenceConfiguration: {
        maxTokens: 500,
        temperature: 1,
        topP: 0.5,
      },
    }),
  })
  .authorization((allow) => allow.resource(getEvents));

export type Schema = ClientSchema<typeof schema>;

export const data = (authFunction: ConstructFactory<AmplifyFunction>) =>
  defineData({
    schema,
    authorizationModes: {
      defaultAuthorizationMode: "userPool",
      lambdaAuthorizationMode: {
        function: authFunction,
        timeToLiveInSeconds: 300,
      },
    },
  });
