/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getConversationChat =
  /* GraphQL */ `query GetConversationChat($id: ID!) {
  getConversationChat(id: $id) {
    createdAt
    id
    messages {
      nextToken
      __typename
    }
    metadata
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationChatQueryVariables,
    APITypes.GetConversationChatQuery
  >;
export const getConversationMessageChat =
  /* GraphQL */ `query GetConversationMessageChat($id: ID!) {
  getConversationMessageChat(id: $id) {
    aiContext
    assistantContent {
      text
      __typename
    }
    content {
      text
      __typename
    }
    conversation {
      createdAt
      id
      metadata
      name
      owner
      updatedAt
      __typename
    }
    conversationId
    createdAt
    id
    owner
    role
    toolConfiguration {
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
    APITypes.GetConversationMessageChatQueryVariables,
    APITypes.GetConversationMessageChatQuery
  >;
export const getCurrentDate = /* GraphQL */ `query GetCurrentDate {
  getCurrentDate
}
` as GeneratedQuery<
  APITypes.GetCurrentDateQueryVariables,
  APITypes.GetCurrentDateQuery
>;
export const getEvent = /* GraphQL */ `query GetEvent($id: String!) {
  getEvent(id: $id) {
    createdAt
    date
    description
    id
    link
    rawItem
    source
    timestamp
    title
    updatedAt
    year
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const getEvents = /* GraphQL */ `query GetEvents {
  getEvents
}
` as GeneratedQuery<APITypes.GetEventsQueryVariables, APITypes.GetEventsQuery>;
export const listConversationChats = /* GraphQL */ `query ListConversationChats(
  $filter: ModelConversationChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationChats(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      metadata
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListConversationChatsQueryVariables,
  APITypes.ListConversationChatsQuery
>;
export const listConversationMessageChats =
  /* GraphQL */ `query ListConversationMessageChats(
  $filter: ModelConversationMessageChatFilterInput
  $limit: Int
  $nextToken: String
) {
  listConversationMessageChats(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      aiContext
      conversationId
      createdAt
      id
      owner
      role
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
    APITypes.ListConversationMessageChatsQueryVariables,
    APITypes.ListConversationMessageChatsQuery
  >;
export const listEventByYear = /* GraphQL */ `query ListEventByYear(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $year: Int!
) {
  listEventByYear(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    year: $year
  ) {
    items {
      createdAt
      date
      description
      id
      link
      rawItem
      source
      timestamp
      title
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventByYearQueryVariables,
  APITypes.ListEventByYearQuery
>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $id: String
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listEvents(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      createdAt
      date
      description
      id
      link
      rawItem
      source
      timestamp
      title
      updatedAt
      year
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
