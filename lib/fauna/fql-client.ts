import faunadb from 'faunadb';

export const faunaQuery = faunadb.query;

const secret = process.env.FAUNA_CLIENT_SECRET;
let endpoint = process.env.FAUNA_CLIENT_ENDPOINT;

if (typeof secret === 'undefined' || secret === '') {
  console.error('The FAUNA_CLIENT_SECRET environment variable is not set, exiting.');
  process.exit(1);
}

if (!endpoint) endpoint = 'https://db.fauna.com/';

let mg, domain, port, scheme: "http" | "https" | undefined
if ((mg = endpoint.match(/^(https?):\/\/([^:]+)(:(\d+))?/))) {
  scheme = mg[1] === 'http' ? 'http' : 'https';
  domain = mg[2] || 'db.fauna.com';
  port = +mg[4] || 443;
}

const faunaClient = new faunadb.Client({
  secret: secret,
  domain: domain,
  port: port,
  scheme: scheme,
});

export default faunaClient;
