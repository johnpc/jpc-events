import { Parser } from "xml2js";
export const getRssAsJson = async (feedUrl: string) => {
  const fetchResponse = await fetch(`${feedUrl}?test=1`);
  const xml = await fetchResponse.text();
  const parser = new Parser();
  const json = await parser.parseStringPromise(xml);
  return json;
};

export const fetchRssBridge = async (url: string, selector: string) => {
  const baseUrl = "https://rss-bridge.org/bridge01/";
  const args = `?action=display&bridge=CssSelectorBridge&home_page=${encodeURIComponent(
    url,
  )}&url_selector=${encodeURIComponent(
    selector,
  )}&url_pattern=&content_selector=&content_cleanup=&title_cleanup=&limit=50&format=Json`;
  const bridgeUrl = baseUrl + args;
  const fetchResponse = await fetch(bridgeUrl);
  return await fetchResponse.json();
};
