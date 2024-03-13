const { TwitterApi } = require('twitter-api-v2');

const client = new TwitterApi({
  appKey: process.env.TWITTER_CONSUMER_KEY,
  appSecret: process.env.TWITTER_CONSUMER_SECRET,
  accessToken: process.env.TWITTER_ACCESS_TOKEN,
  accessSecret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
});

const rwClient = client.readWrite;

export async function postTweet(tweetText) {
  const { res, error } = await rwClient.v2.tweet({
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
  // Create Tweet from data
  const request = await postTweet(`${message} https://thomaspaysac.com/blog/${slug}`);
  console.log(request);
  return new Response("Command launched", { statut: 200 });
}