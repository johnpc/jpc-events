import { fetchRssBridge, getRssAsJson } from "./rss";
import { parse } from "node-html-parser";
/**
TODO: No feed yet:
- https://www.annarbor.org/events/
- https://www.ecurrent.com/calendar/#!/
- https://annarborobserver.com/calendar/
- https://theark.org/events/
*/

export enum PROVIDERS {
  CITY_OF_ANN_ARBOR = "CITY_OF_ANN_ARBOR",
  MICHGIAN_THEATER = "MICHGIAN_THEATER",
  AADL = "AADL",
  BLIND_PIG = "BLIND_PIG",
  UMICH_EVENTS = "UMICH_EVENTS",
  EVENTBRITE = "EVENTBRITE",
}

const allProviders = [
  PROVIDERS.CITY_OF_ANN_ARBOR,
  PROVIDERS.MICHGIAN_THEATER,
  PROVIDERS.AADL,
  PROVIDERS.BLIND_PIG,
  PROVIDERS.UMICH_EVENTS,
  PROVIDERS.EVENTBRITE,
];

export type AnnArborEvent = {
  title: string;
  link: string;
  description?: string;
  date: Date;
  source: PROVIDERS;
};

const getCityOfAnnArborEvents = async (): Promise<AnnArborEvent[]> => {
  const rssUrl = "https://www.trumba.com/calendars/city-of-ann-arbor.rss";
  const json = await getRssAsJson(rssUrl);
  const items = json.rss.channel[0].item;
  const events = [] as AnnArborEvent[];
  for (const item of items) {
    const title = item.title.find((title: string) => title);
    const link = item.link.find((link: string) => link);
    const description = item.description.find(
      (description: string) => description,
    );
    const dateString = item.category.find((dateString: string) => dateString);
    const date = new Date(dateString);
    events.push({
      title,
      link,
      description,
      date,
      source: PROVIDERS.CITY_OF_ANN_ARBOR,
    });
  }

  return events;
};

const getMichiganTheaterEvents = async (): Promise<AnnArborEvent[]> => {
  const json = await fetchRssBridge(
    "https://marquee-arts.org/events/",
    ".event-archive-item",
  );
  let events = [] as AnnArborEvent[];
  for (const item of json.items) {
    const link = item.url;
    const root = parse(item.content_html);
    const title = root.querySelector(".event-archive-title")?.innerText;
    const dateString = item.content_html.substring(
      item.content_html.indexOf("<br><br>") + "<br><br>".length,
      item.content_html.indexOf("|"),
    );
    const date = new Date(dateString.trim());
    events.push({
      title: title!,
      link,
      date,
      source: PROVIDERS.MICHGIAN_THEATER,
    });
  }
  return events;
};

const getAadlEvents = async (): Promise<AnnArborEvent[]> => {
  const json = await fetchRssBridge(
    "https://aadl.org/events-feed/upcoming/",
    ".search-result",
  );
  let events = [] as AnnArborEvent[];
  for (const item of json.items) {
    const link = item.url;
    const title = item.title;

    const root = parse(item.content_html);
    const pTags = root.querySelectorAll("p");
    const datePTag = pTags.find((pTag) => pTag.innerHTML.includes(":"));
    const dateString = datePTag?.innerHTML.substring(
      0,
      datePTag.innerHTML.indexOf(":"),
    );
    const date = new Date(dateString!.trim());
    events.push({
      title: title!,
      link,
      date,
      source: PROVIDERS.AADL,
    });
  }
  return events;
};

const getBlindPigEvents = async (): Promise<AnnArborEvent[]> => {
  const json = await fetchRssBridge(
    "https://blindpigmusic.com/calendar/",
    ".tw-section",
  );
  let events = [] as AnnArborEvent[];
  for (const item of json.items) {
    const link = item.url;
    const root = parse(item.content_html);
    const dateString = root.querySelector(".tw-event-date")?.innerHTML;
    const date = new Date(dateString!);
    date.setFullYear(new Date().getFullYear());
    const title = root
      .querySelector(".tw-name")
      ?.querySelector("span")?.innerHTML;
    events.push({
      title: title!,
      link,
      date,
      source: PROVIDERS.AADL,
    });
  }
  return events;
};

const getUmichEvents = async (): Promise<AnnArborEvent[]> => {
  const json = await fetchRssBridge(
    "https://events.umich.edu/list",
    ".event-listing-grid",
  );
  let events = [] as AnnArborEvent[];
  for (const item of json.items) {
    const link = item.url;
    const root = parse(item.content_html);
    const dateString = root.querySelector("time")?.attributes.datetime;
    const date = new Date(dateString!);
    const title = root.querySelector(".event-title a")?.attributes.title;
    events.push({
      title: title!,
      link,
      date,
      source: PROVIDERS.UMICH_EVENTS,
    });
  }
  return events;
};

const getEventbriteEvents = async (): Promise<AnnArborEvent[]> => {
  const json = await fetchRssBridge(
    "https://www.eventbrite.com/d/mi--ann-arbor/events--this-weekend/",
    ".discover-vertical-event-card",
  );
  let events = [] as AnnArborEvent[];
  for (const item of json.items) {
    const link = item.url;
    const root = parse(item.content_html);
    // const dateString = root.querySelector('time')?.attributes.datetime;
    const date = new Date();
    const title = root.querySelector(".event-card__clamp-line--two")?.innerHTML;
    events.push({
      title: title!,
      link,
      date,
      source: PROVIDERS.EVENTBRITE,
    });
  }
  return events;
};
const getRssEvents = (provider: PROVIDERS): Promise<AnnArborEvent[]> => {
  switch (provider) {
    case PROVIDERS.CITY_OF_ANN_ARBOR:
      return getCityOfAnnArborEvents();
    case PROVIDERS.MICHGIAN_THEATER:
      return getMichiganTheaterEvents();
    case PROVIDERS.AADL:
      return getAadlEvents();
    case PROVIDERS.BLIND_PIG:
      return getBlindPigEvents();
    case PROVIDERS.UMICH_EVENTS:
      return getUmichEvents();
    case PROVIDERS.EVENTBRITE:
      return getEventbriteEvents();
    default:
      const exhaustiveCheck: never = provider;
      throw new Error(`Unhandled provider: ${exhaustiveCheck}`);
  }
};

export const getAllEvents = async (): Promise<AnnArborEvent[]> => {
  const allProviderPromises = allProviders.map((provider) =>
    getRssEvents(provider),
  );
  const resolvedPromises = await Promise.all(allProviderPromises);
  return resolvedPromises.flat().sort((a, b) => {
    const aTime = Number.isNaN(a.date.getTime())
      ? 10000000000000
      : a.date.getTime();
    const bTime = Number.isNaN(b.date.getTime())
      ? 10000000000000
      : b.date.getTime();
    return aTime - bTime;
  });
};
