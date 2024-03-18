const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require('simple-oauth2');
import { redirect } from 'next/navigation'

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

const client = new AuthorizationCode({
  client: {
    id: process.env.LINKEDIN_ID,
    secret: process.env.LINKEDIN_SECRET,
  },
  options: {
    authorizationMethod: 'body',
  },
  auth: {
    authorizeHost: "https://www.linkedin.com",
    authorizePath: "/oauth/v2/authorization",
    tokenHost: "https://www.linkedin.com",
    tokenPath: "/oauth/v2/accessToken",
  },
});

export async function run() {
  const authorizationUri = client.authorizeURL({
    redirect_uri: 'https://thomaspaysac.com',
    scope: ["r_liteprofile", "r_emailaddress", "w_member_social"],
    state: 'foufoufou'
  });

  /*res.redirect('307', authorizationUri);

  const tokenParams = {
    code: '<code>',
    redirect_uri: 'http://localhost:3000/callback',
    scope: '<scope>',
  };

  try {
    const accessToken = await client.getToken(tokenParams);
  } catch (error) {
    console.log('Access Token Error', error.message);
  }*/
}