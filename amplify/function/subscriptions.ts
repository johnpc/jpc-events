/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateAssistantResponseChat =
  /* GraphQL */ `subscription OnCreateAssistantResponseChat($conversationId: ID) {
  onCreateAssistantResponseChat(conversationId: $conversationId) {
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
` as GeneratedSubscription<
    APITypes.OnCreateAssistantResponseChatSubscriptionVariables,
    APITypes.OnCreateAssistantResponseChatSubscription
  >;
export const onCreateConversationMessageChat =
  /* GraphQL */ `subscription OnCreateConversationMessageChat(
  $filter: ModelSubscriptionConversationMessageChatFilterInput
  $owner: String
) {
  onCreateConversationMessageChat(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
    APITypes.OnCreateConversationMessageChatSubscriptionVariables,
    APITypes.OnCreateConversationMessageChatSubscription
  >;
export const onCreateEvent =
  /* GraphQL */ `subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
  onCreateEvent(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnCreateEventSubscriptionVariables,
    APITypes.OnCreateEventSubscription
  >;
export const onDeleteEvent =
  /* GraphQL */ `subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
  onDeleteEvent(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnDeleteEventSubscriptionVariables,
    APITypes.OnDeleteEventSubscription
  >;
export const onUpdateEvent =
  /* GraphQL */ `subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
  onUpdateEvent(filter: $filter) {
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
` as GeneratedSubscription<
    APITypes.OnUpdateEventSubscriptionVariables,
    APITypes.OnUpdateEventSubscription
  >;
