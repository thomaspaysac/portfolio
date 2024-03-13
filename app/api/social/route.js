import { getArticle } from "@/app/lib/contentful_api";
var jsonBody = require("body/json")
const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const appOnlyClientFromConsumer = await client.appLogin();
const rwClient = client.readWrite;

export async function postTweet(tweetText) {
  const { res, error } = await rwClient.v2.tweet({
    text: tweetText
  });
  if (error) {
    console.log(error);
  }
  /*try {
    const tweet = await client.v2.tweet(tweetText);
    console.log(`Tweet posted with ID ${tweet.data.id}`);
  } catch (error) {
    console.error(`Failed to post tweet: ${error}`);
  }*/
}

async function toJSON(body) {
  const reader = body.getReader(); // `ReadableStreamDefaultReader`
  const decoder = new TextDecoder();
  const chunks = [];

  async function read() {
    const { done, value } = await reader.read();

    // all chunks have been read?
    if (done) {
      return JSON.parse(chunks.join(''));
    }

    const chunk = decoder.decode(value, { stream: true });
    chunks.push(chunk);
    return read(); // read the next chunk
  }

  return read();
}

export async function POST(req) {
  const data = await toJSON(req.body);
  const slug = data.fields.slug['en-US'];
  postTweet(`New post! Find it at https://thomaspaysac.com/blog/${slug}`);
  return new Response("Command launched", { statut: 200 });
}