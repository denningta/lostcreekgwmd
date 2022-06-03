import faunaClient, { faunaQuery } from "./fql-client";

export const createMessage = async (contactMessage: any) => {
  return await faunaClient.query(
    faunaQuery.Create(
      faunaQuery.Collection('Messages'),
      {
        data: {
          ...contactMessage,
          createdAt: new Date().toISOString(),
        }
      }
    )
  )
  .then((res) => res)
  .catch((error) => 
    `${error.name}: ${error.message}, ${error.errors()[0].description}`
  );
}

