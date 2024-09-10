import { getAllEvents } from "@/app/helpers/getAllEvents";
import { Schema } from "../amplify/data/resource";
import { generateClient } from "aws-amplify/api";
import config from "../amplify_outputs.json";
import { Amplify } from "aws-amplify";
import dotenv from "dotenv";
dotenv.config();
Amplify.configure(config);

const cyrb53 = (str: string, seed = 0) => {
  let h1 = 0xdeadbeef ^ seed,
    h2 = 0x41c6ce57 ^ seed;
  for (let i = 0, ch; i < str.length; i++) {
    ch = str.charCodeAt(i);
    h1 = Math.imul(h1 ^ ch, 2654435761);
    h2 = Math.imul(h2 ^ ch, 1597334677);
  }
  h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
  h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
  h2 = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
  h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);

  return 4294967296 * (2097151 & h2) + (h1 >>> 0);
};

const client = generateClient<Schema>({
  authMode: "lambda",
  authToken: process.env.ADMIN_API_KEY,
});

const main = async () => {
  const events = await getAllEvents();
  let eventsCreated = 0;
  for (const oneEvent of events) {
    const createdEvent = await client.models.Event.create({
      ...oneEvent,
      id: cyrb53(`${oneEvent.title}-${oneEvent.date}`).toString(),
      date: oneEvent.date.toLocaleString(),
      timestamp: `${oneEvent.timestamp}`,
      year: parseInt(
        oneEvent.date.toLocaleString("en-US", {
          year: "numeric",
        }),
      ),
      rawItem: JSON.stringify(oneEvent.rawItem),
    });
    if (createdEvent.errors) {
      console.log({ oneEvent, createdEvent, errors: createdEvent.errors });
    } else {
      eventsCreated++;
    }
  }
  console.log({ eventsCreated });
};

main();
