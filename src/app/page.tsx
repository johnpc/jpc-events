"use client";
import { generateClient } from "aws-amplify/data";
import { createAIHooks, AIConversation } from "@aws-amplify/ui-react-ai";
import type { Schema } from "../../amplify/data/resource";
import config from "../../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
Amplify.configure(config);

const client = generateClient<Schema>({ authMode: "userPool" });
const { useAIConversation } = createAIHooks(client);

export default function Page() {
  const [
    {
      data: { messages },
    },
    sendMessage,
  ] = useAIConversation("chat");
  // 'chat' here should be the key in your schema

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <AIConversation
          messages={messages}
          handleSendMessage={sendMessage}
          variant="bubble"
          avatars={{
            user: {
              username: user!.signInDetails?.loginId?.split("@")[0],
              avatar: "🥷",
            },
            ai: {
              username: "EventBot",
              avatar: "🤖",
            },
          }}
        />
      )}
    </Authenticator>
  );
}
