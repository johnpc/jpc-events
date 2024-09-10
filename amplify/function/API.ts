/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type ConversationChat = {
  __typename: "ConversationChat";
  createdAt: string;
  id: string;
  messages?: ModelConversationMessageChatConnection | null;
  metadata?: string | null;
  name?: string | null;
  owner?: string | null;
  updatedAt: string;
};

export type ModelConversationMessageChatConnection = {
  __typename: "ModelConversationMessageChatConnection";
  items: Array<ConversationMessageChat | null>;
  nextToken?: string | null;
};

export type ConversationMessageChat = {
  __typename: "ConversationMessageChat";
  aiContext?: string | null;
  assistantContent?: Array<ContentBlock | null> | null;
  content?: Array<ContentBlock | null> | null;
  conversation?: ConversationChat | null;
  conversationId: string;
  createdAt: string;
  id: string;
  owner?: string | null;
  role?: ConversationParticipantRole | null;
  toolConfiguration?: ToolConfiguration | null;
  updatedAt: string;
};

export type ConversationMessage = {
  __typename: "ConversationMessage";
  aiContext?: string | null;
  content?: Array<ContentBlock | null> | null;
  conversationId: string;
  createdAt?: string | null;
  id: string;
  owner?: string | null;
  role?: ConversationParticipantRole | null;
  toolConfiguration?: ToolConfiguration | null;
  updatedAt?: string | null;
};

export type ContentBlock = {
  __typename: "ContentBlock";
  document?: DocumentBlock | null;
  image?: ImageBlock | null;
  text?: string | null;
  toolResult?: ToolResultBlock | null;
  toolUse?: ToolUseBlock | null;
};

export type DocumentBlock = {
  __typename: "DocumentBlock";
  format: string;
  name: string;
  source: DocumentBlockSource;
};

export type DocumentBlockSource = {
  __typename: "DocumentBlockSource";
  bytes?: string | null;
};

export type ImageBlock = {
  __typename: "ImageBlock";
  format: string;
  source: ImageBlockSource;
};

export type ImageBlockSource = {
  __typename: "ImageBlockSource";
  bytes?: string | null;
};

export type ToolResultBlock = {
  __typename: "ToolResultBlock";
  content: Array<ToolResultContentBlock>;
  status?: string | null;
  toolUseId: string;
};

export type ToolResultContentBlock = {
  __typename: "ToolResultContentBlock";
  document?: DocumentBlock | null;
  image?: ImageBlock | null;
  json?: string | null;
  text?: string | null;
};

export type ToolUseBlock = {
  __typename: "ToolUseBlock";
  input: string;
  name: string;
  toolUseId: string;
};

export enum ConversationParticipantRole {
  assistant = "assistant",
  user = "user",
}

export type ToolConfiguration = {
  __typename: "ToolConfiguration";
  tools?: Array<Tool | null> | null;
};

export type Tool = {
  __typename: "Tool";
  toolSpec?: ToolSpecification | null;
};

export type ToolSpecification = {
  __typename: "ToolSpecification";
  description?: string | null;
  inputSchema: ToolInputSchema;
  name: string;
};

export type ToolInputSchema = {
  __typename: "ToolInputSchema";
  json?: string | null;
};

export type Event = {
  __typename: "Event";
  createdAt: string;
  date: string;
  description?: string | null;
  id: string;
  link: string;
  rawItem: string;
  source: string;
  timestamp: string;
  title: string;
  updatedAt: string;
  year: number;
};

export type ModelConversationChatFilterInput = {
  and?: Array<ModelConversationChatFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  metadata?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelConversationChatFilterInput | null;
  or?: Array<ModelConversationChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelStringInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}

export type ModelSizeInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export type ModelIDInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  size?: ModelSizeInput | null;
};

export type ModelConversationChatConnection = {
  __typename: "ModelConversationChatConnection";
  items: Array<ConversationChat | null>;
  nextToken?: string | null;
};

export type ModelConversationMessageChatFilterInput = {
  aiContext?: ModelStringInput | null;
  and?: Array<ModelConversationMessageChatFilterInput | null> | null;
  conversationId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  id?: ModelIDInput | null;
  not?: ModelConversationMessageChatFilterInput | null;
  or?: Array<ModelConversationMessageChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelConversationParticipantRoleInput | null;
  updatedAt?: ModelStringInput | null;
};

export type ModelConversationParticipantRoleInput = {
  eq?: ConversationParticipantRole | null;
  ne?: ConversationParticipantRole | null;
};

export type ModelEventFilterInput = {
  and?: Array<ModelEventFilterInput | null> | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  id?: ModelStringInput | null;
  link?: ModelStringInput | null;
  not?: ModelEventFilterInput | null;
  or?: Array<ModelEventFilterInput | null> | null;
  rawItem?: ModelStringInput | null;
  source?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  title?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  year?: ModelIntInput | null;
};

export type ModelIntInput = {
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelEventConnection = {
  __typename: "ModelEventConnection";
  items: Array<Event | null>;
  nextToken?: string | null;
};

export type ContentBlockInput = {
  document?: DocumentBlockInput | null;
  image?: ImageBlockInput | null;
  text?: string | null;
  toolResult?: ToolResultBlockInput | null;
  toolUse?: ToolUseBlockInput | null;
};

export type DocumentBlockInput = {
  format: string;
  name: string;
  source: DocumentBlockSourceInput;
};

export type DocumentBlockSourceInput = {
  bytes?: string | null;
};

export type ImageBlockInput = {
  format: string;
  source: ImageBlockSourceInput;
};

export type ImageBlockSourceInput = {
  bytes?: string | null;
};

export type ToolResultBlockInput = {
  content: Array<ToolResultContentBlockInput>;
  status?: string | null;
  toolUseId: string;
};

export type ToolResultContentBlockInput = {
  document?: DocumentBlockInput | null;
  image?: ImageBlockInput | null;
  json?: string | null;
  text?: string | null;
};

export type ToolUseBlockInput = {
  input: string;
  name: string;
  toolUseId: string;
};

export type ToolConfigurationInput = {
  tools?: Array<ToolInput | null> | null;
};

export type ToolInput = {
  toolSpec?: ToolSpecificationInput | null;
};

export type ToolSpecificationInput = {
  description?: string | null;
  inputSchema: ToolInputSchemaInput;
  name: string;
};

export type ToolInputSchemaInput = {
  json?: string | null;
};

export type CreateConversationMessageChatAssistantInput = {
  associatedUserMessageId?: string | null;
  content?: Array<ContentBlockInput | null> | null;
  conversationId?: string | null;
};

export type ModelConversationChatConditionInput = {
  and?: Array<ModelConversationChatConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  metadata?: ModelStringInput | null;
  name?: ModelStringInput | null;
  not?: ModelConversationChatConditionInput | null;
  or?: Array<ModelConversationChatConditionInput | null> | null;
  owner?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateConversationChatInput = {
  id?: string | null;
  metadata?: string | null;
  name?: string | null;
};

export type ModelConversationMessageChatConditionInput = {
  aiContext?: ModelStringInput | null;
  and?: Array<ModelConversationMessageChatConditionInput | null> | null;
  conversationId?: ModelIDInput | null;
  createdAt?: ModelStringInput | null;
  not?: ModelConversationMessageChatConditionInput | null;
  or?: Array<ModelConversationMessageChatConditionInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelConversationParticipantRoleInput | null;
  updatedAt?: ModelStringInput | null;
};

export type CreateConversationMessageChatInput = {
  aiContext?: string | null;
  assistantContent?: Array<ContentBlockInput | null> | null;
  content?: Array<ContentBlockInput | null> | null;
  conversationId: string;
  id?: string | null;
  role?: ConversationParticipantRole | null;
  toolConfiguration?: ToolConfigurationInput | null;
};

export type ModelEventConditionInput = {
  and?: Array<ModelEventConditionInput | null> | null;
  createdAt?: ModelStringInput | null;
  date?: ModelStringInput | null;
  description?: ModelStringInput | null;
  link?: ModelStringInput | null;
  not?: ModelEventConditionInput | null;
  or?: Array<ModelEventConditionInput | null> | null;
  rawItem?: ModelStringInput | null;
  source?: ModelStringInput | null;
  timestamp?: ModelStringInput | null;
  title?: ModelStringInput | null;
  updatedAt?: ModelStringInput | null;
  year?: ModelIntInput | null;
};

export type CreateEventInput = {
  date: string;
  description?: string | null;
  id?: string | null;
  link: string;
  rawItem: string;
  source: string;
  timestamp: string;
  title: string;
  year: number;
};

export type DeleteConversationChatInput = {
  id: string;
};

export type DeleteConversationMessageChatInput = {
  id: string;
};

export type DeleteEventInput = {
  id: string;
};

export type UpdateEventInput = {
  date?: string | null;
  description?: string | null;
  id: string;
  link?: string | null;
  rawItem?: string | null;
  source?: string | null;
  timestamp?: string | null;
  title?: string | null;
  year?: number | null;
};

export type ModelSubscriptionConversationMessageChatFilterInput = {
  aiContext?: ModelSubscriptionStringInput | null;
  and?: Array<ModelSubscriptionConversationMessageChatFilterInput | null> | null;
  conversationId?: ModelSubscriptionIDInput | null;
  createdAt?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionIDInput | null;
  or?: Array<ModelSubscriptionConversationMessageChatFilterInput | null> | null;
  owner?: ModelStringInput | null;
  role?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null;
  between?: Array<string | null> | null;
  contains?: string | null;
  eq?: string | null;
  ge?: string | null;
  gt?: string | null;
  in?: Array<string | null> | null;
  le?: string | null;
  lt?: string | null;
  ne?: string | null;
  notContains?: string | null;
  notIn?: Array<string | null> | null;
};

export type ModelSubscriptionEventFilterInput = {
  and?: Array<ModelSubscriptionEventFilterInput | null> | null;
  createdAt?: ModelSubscriptionStringInput | null;
  date?: ModelSubscriptionStringInput | null;
  description?: ModelSubscriptionStringInput | null;
  id?: ModelSubscriptionStringInput | null;
  link?: ModelSubscriptionStringInput | null;
  or?: Array<ModelSubscriptionEventFilterInput | null> | null;
  rawItem?: ModelSubscriptionStringInput | null;
  source?: ModelSubscriptionStringInput | null;
  timestamp?: ModelSubscriptionStringInput | null;
  title?: ModelSubscriptionStringInput | null;
  updatedAt?: ModelSubscriptionStringInput | null;
  year?: ModelSubscriptionIntInput | null;
};

export type ModelSubscriptionIntInput = {
  between?: Array<number | null> | null;
  eq?: number | null;
  ge?: number | null;
  gt?: number | null;
  in?: Array<number | null> | null;
  le?: number | null;
  lt?: number | null;
  ne?: number | null;
  notIn?: Array<number | null> | null;
};

export type GetConversationChatQueryVariables = {
  id: string;
};

export type GetConversationChatQuery = {
  getConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type GetConversationMessageChatQueryVariables = {
  id: string;
};

export type GetConversationMessageChatQuery = {
  getConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type GetCurrentDateQueryVariables = {};

export type GetCurrentDateQuery = {
  getCurrentDate?: string | null;
};

export type GetEventQueryVariables = {
  id: string;
};

export type GetEventQuery = {
  getEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type GetEventsQueryVariables = {};

export type GetEventsQuery = {
  getEvents?: string | null;
};

export type ListConversationChatsQueryVariables = {
  filter?: ModelConversationChatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListConversationChatsQuery = {
  listConversationChats?: {
    __typename: "ModelConversationChatConnection";
    items: Array<{
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListConversationMessageChatsQueryVariables = {
  filter?: ModelConversationMessageChatFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListConversationMessageChatsQuery = {
  listConversationMessageChats?: {
    __typename: "ModelConversationMessageChatConnection";
    items: Array<{
      __typename: "ConversationMessageChat";
      aiContext?: string | null;
      conversationId: string;
      createdAt: string;
      id: string;
      owner?: string | null;
      role?: ConversationParticipantRole | null;
      updatedAt: string;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListEventByYearQueryVariables = {
  filter?: ModelEventFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
  year: number;
};

export type ListEventByYearQuery = {
  listEventByYear?: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      createdAt: string;
      date: string;
      description?: string | null;
      id: string;
      link: string;
      rawItem: string;
      source: string;
      timestamp: string;
      title: string;
      updatedAt: string;
      year: number;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null;
  id?: string | null;
  limit?: number | null;
  nextToken?: string | null;
  sortDirection?: ModelSortDirection | null;
};

export type ListEventsQuery = {
  listEvents?: {
    __typename: "ModelEventConnection";
    items: Array<{
      __typename: "Event";
      createdAt: string;
      date: string;
      description?: string | null;
      id: string;
      link: string;
      rawItem: string;
      source: string;
      timestamp: string;
      title: string;
      updatedAt: string;
      year: number;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type ChatMutationVariables = {
  aiContext?: string | null;
  content?: Array<ContentBlockInput | null> | null;
  conversationId: string;
  toolConfiguration?: ToolConfigurationInput | null;
};

export type ChatMutation = {
  chat: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversationId: string;
    createdAt?: string | null;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
  } | null;
};

export type CreateAssistantResponseChatMutationVariables = {
  input: CreateConversationMessageChatAssistantInput;
};

export type CreateAssistantResponseChatMutation = {
  createAssistantResponseChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type CreateConversationChatMutationVariables = {
  condition?: ModelConversationChatConditionInput | null;
  input: CreateConversationChatInput;
};

export type CreateConversationChatMutation = {
  createConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type CreateConversationMessageChatMutationVariables = {
  condition?: ModelConversationMessageChatConditionInput | null;
  input: CreateConversationMessageChatInput;
};

export type CreateConversationMessageChatMutation = {
  createConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type CreateEventMutationVariables = {
  condition?: ModelEventConditionInput | null;
  input: CreateEventInput;
};

export type CreateEventMutation = {
  createEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type DeleteConversationChatMutationVariables = {
  condition?: ModelConversationChatConditionInput | null;
  input: DeleteConversationChatInput;
};

export type DeleteConversationChatMutation = {
  deleteConversationChat?: {
    __typename: "ConversationChat";
    createdAt: string;
    id: string;
    messages?: {
      __typename: "ModelConversationMessageChatConnection";
      nextToken?: string | null;
    } | null;
    metadata?: string | null;
    name?: string | null;
    owner?: string | null;
    updatedAt: string;
  } | null;
};

export type DeleteConversationMessageChatMutationVariables = {
  condition?: ModelConversationMessageChatConditionInput | null;
  input: DeleteConversationMessageChatInput;
};

export type DeleteConversationMessageChatMutation = {
  deleteConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type DeleteEventMutationVariables = {
  condition?: ModelEventConditionInput | null;
  input: DeleteEventInput;
};

export type DeleteEventMutation = {
  deleteEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type UpdateEventMutationVariables = {
  condition?: ModelEventConditionInput | null;
  input: UpdateEventInput;
};

export type UpdateEventMutation = {
  updateEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type OnCreateAssistantResponseChatSubscriptionVariables = {
  conversationId?: string | null;
};

export type OnCreateAssistantResponseChatSubscription = {
  onCreateAssistantResponseChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type OnCreateConversationMessageChatSubscriptionVariables = {
  filter?: ModelSubscriptionConversationMessageChatFilterInput | null;
  owner?: string | null;
};

export type OnCreateConversationMessageChatSubscription = {
  onCreateConversationMessageChat?: {
    __typename: "ConversationMessageChat";
    aiContext?: string | null;
    assistantContent?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    content?: Array<{
      __typename: "ContentBlock";
      text?: string | null;
    } | null> | null;
    conversation?: {
      __typename: "ConversationChat";
      createdAt: string;
      id: string;
      metadata?: string | null;
      name?: string | null;
      owner?: string | null;
      updatedAt: string;
    } | null;
    conversationId: string;
    createdAt: string;
    id: string;
    owner?: string | null;
    role?: ConversationParticipantRole | null;
    toolConfiguration?: {
      __typename: "ToolConfiguration";
    } | null;
    updatedAt: string;
  } | null;
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
};

export type OnCreateEventSubscription = {
  onCreateEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null;
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?: {
    __typename: "Event";
    createdAt: string;
    date: string;
    description?: string | null;
    id: string;
    link: string;
    rawItem: string;
    source: string;
    timestamp: string;
    title: string;
    updatedAt: string;
    year: number;
  } | null;
};
