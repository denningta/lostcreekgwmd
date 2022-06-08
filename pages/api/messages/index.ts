import { NextApiRequest, NextApiResponse } from 'next';
import client from '../../../lib/sanity-client';
import sendNotification from './send-notification';

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
      const documentRes = await client.create(req.body).then((res) => res);
      const notificationRes = sendNotification(req.body).then((res) => res);
      res.json(documentRes);
    },
  };

  if (!handlers[req.method]) {
    return res.status(405).end();
  }

  await handlers[req.method]();
}
