/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const chat = /* GraphQL */ `mutation Chat(
  $aiContext: AWSJSON
  $content: [ContentBlockInput]
  $conversationId: ID!
  $toolConfiguration: ToolConfigurationInput
) {
  chat(
    aiContext: $aiContext
    content: $content
    conversationId: $conversationId
    toolConfiguration: $toolConfiguration
  ) {
    aiContext
    content {
      text
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

    ... on ConversationMessageChat {
      assistantContent {
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
    }
  }
}
` as GeneratedMutation<APITypes.ChatMutationVariables, APITypes.ChatMutation>;
export const createAssistantResponseChat =
  /* GraphQL */ `mutation CreateAssistantResponseChat(
  $input: CreateConversationMessageChatAssistantInput!
) {
  createAssistantResponseChat(input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateAssistantResponseChatMutationVariables,
    APITypes.CreateAssistantResponseChatMutation
  >;
export const createConversationChat =
  /* GraphQL */ `mutation CreateConversationChat(
  $condition: ModelConversationChatConditionInput
  $input: CreateConversationChatInput!
) {
  createConversationChat(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateConversationChatMutationVariables,
    APITypes.CreateConversationChatMutation
  >;
export const createConversationMessageChat =
  /* GraphQL */ `mutation CreateConversationMessageChat(
  $condition: ModelConversationMessageChatConditionInput
  $input: CreateConversationMessageChatInput!
) {
  createConversationMessageChat(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.CreateConversationMessageChatMutationVariables,
    APITypes.CreateConversationMessageChatMutation
  >;
export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $condition: ModelEventConditionInput
  $input: CreateEventInput!
) {
  createEvent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const deleteConversationChat =
  /* GraphQL */ `mutation DeleteConversationChat(
  $condition: ModelConversationChatConditionInput
  $input: DeleteConversationChatInput!
) {
  deleteConversationChat(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.DeleteConversationChatMutationVariables,
    APITypes.DeleteConversationChatMutation
  >;
export const deleteConversationMessageChat =
  /* GraphQL */ `mutation DeleteConversationMessageChat(
  $condition: ModelConversationMessageChatConditionInput
  $input: DeleteConversationMessageChatInput!
) {
  deleteConversationMessageChat(condition: $condition, input: $input) {
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
` as GeneratedMutation<
    APITypes.DeleteConversationMessageChatMutationVariables,
    APITypes.DeleteConversationMessageChatMutation
  >;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $condition: ModelEventConditionInput
  $input: DeleteEventInput!
) {
  deleteEvent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $condition: ModelEventConditionInput
  $input: UpdateEventInput!
) {
  updateEvent(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
