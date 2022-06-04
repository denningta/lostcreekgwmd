import { request } from 'https';
import { NextApiRequest, NextApiResponse } from 'next';
import { createMessage } from '../../../lib/fauna/fql-queries';
import { createMessageOld } from '../../../lib/fauna/graphql-client';
import client from '../../../lib/sanity-client';

type HandlerFunctions = { [key: string]: () => Promise<void> };

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
      // const created = await createMessage(req.body);
      const documentCreated = await client.create(req.body).then((res) => res)
      res.json(documentCreated);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  await handlers[req.method]();
}
