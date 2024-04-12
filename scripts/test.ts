import { getAllEvents } from "@/app/helpers/getAllEvents";

const main = async () => {
  const events = await getAllEvents();
  // events.sort((a, b) => b.date.getTime() - a.date.getTime())
  console.log({ events: events.map((e) => e.date) });
};

main();
