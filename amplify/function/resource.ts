import { defineFunction } from "@aws-amplify/backend";

export const getEvents = defineFunction({
  name: "getEvents",
  entry: "./getEvents.ts",
});
export const getCurrentDate = defineFunction({
  name: "getCurrentDate",
  entry: "./getCurrentDate.ts",
});
