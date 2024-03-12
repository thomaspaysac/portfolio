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

export async function POST(request) {
  const body = jsonBody(request);
  console.log(body);
  //postTweet(`New post! Find it at https://thomaspaysac.com/blog/${slug}`);
}