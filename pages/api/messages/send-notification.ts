import client from "../../../lib/sanity-client";
import { SparkPostRecipients, sparkPostRecipientsQuery } from "../../../lib/sanity-queries";

const sparkPostToken = process.env.SPARKPOST_CLIENT_TOKEN;
const sparkPostEndpoint = process.env.SPARKPOST_ENDPOINT;

async function getRecipients(): Promise<SparkPostRecipients> {
  return await client.fetch(sparkPostRecipientsQuery)
    .then((res) => {console.log('SANITY: ', res); return res})
    .catch((err) => {console.log('SANITY: ', err); return err})
}

async function triggerSparkPostEmail(sparkPostBody: any) {
  if (!sparkPostToken) { return Promise.reject('Env: No SparkPost token defined'); };
  if (!sparkPostEndpoint) { return Promise.reject('Env: No SparkPost endpoint defined'); };

  return await fetch(
    sparkPostEndpoint + '/transmissions/10',
    {
      method: 'POST',
      headers: {
        "Authorization": sparkPostToken
      },
      body: JSON.stringify(sparkPostBody)
    }
  ).then(res => {
    console.log(res);
    return res;
  });
}

export default async function sendNotification(messageData: any) {


  // const recipients: SparkPostRecipients = await client.fetch(sparkPostRecipientsQuery)
  //   .then((res) => {console.log('SANITY: ', res); return res})
  //   .catch((err) => {console.log('SANITY: ', err); return err})

  await getRecipients().then(async (recipients) => {
    console.log(recipients);

    const sparkPostBody = {
      'content': {
        'template_id': 'message-notification',
        'use_draft_template': false
      },
      'substitution_data': {
        ...messageData,
        userEmail: messageData.email
      },
      'recipients': recipients
    }

    return await triggerSparkPostEmail(sparkPostBody)
      .then(res => res)
      .catch(err => err)

  }).catch(error => {
    console.log(error)
    return Promise.reject(error)
  });


  // console.log(JSON.stringify(sparkPostBody))

  // const response = await fetch(
  //   sparkPostEndpoint + '/transmissions/10',
  //   {
  //     method: 'POST',
  //     headers: {
  //       'Authorization': sparkPostToken
  //     },
  //     body: JSON.stringify(sparkPostBody)
  //   }
  // ).then(res => {
  //   console.log(res);
  //   return res;
  // });

  // return response;
}
