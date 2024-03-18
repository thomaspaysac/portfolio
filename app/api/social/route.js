const { TwitterApi } = require('twitter-api-v2');

const Twitter = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rwTwitter = Twitter.readWrite;

export async function postTweet(tweetText) {
  const { res, error } = await rwTwitter.v2.tweet({
    text: tweetText
  });
  if (error) {
    return {message: error, status: 500};
  }
  return {message: 'OK', status: 200}
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
  // Get data from new post
  const data = await toJSON(req.body);
  const slug = data.fields.slug['en-US'];
  const message = data.fields.socialText['en-US'];
  if (!message) {
    return new Response("This post will not be dispatched to social media", { status: 200 });
  }
  // If there is a socialText value, create Tweet from data
  const request = await postTweet(`${message} https://thomaspaysac.com/blog/${slug}`);
  if (request.status !== 200) {
    return new Response("Tweet error", { status: 500 });
  }
  return new Response("Command launched", { status: 200 });
}