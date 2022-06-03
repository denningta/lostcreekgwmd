import { request } from 'https';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMessage } from '../../../lib/fauna/fql-queries';
import { createMessageOld } from '../../../lib/fauna/graphql-client';

type HandlerFunctions = { [key: string]: () => Promise<void> };

const sanityToken = process.env.SANITY_TOKEN;
const sanityProjectId = process.env.SANITY_PROJECT_ID;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (!req || !req.method) {
    res.status(400).end();
    return;
  }

  const handlers: HandlerFunctions = {
    POST: async () => {
      console.log(req.body);
      const created = await createMessage(req.body);
      res.json(created);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  await handlers[req.method]();
}
