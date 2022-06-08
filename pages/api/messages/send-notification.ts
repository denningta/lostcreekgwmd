import client from "../../../lib/sanity-client";
import { SparkPostRecipients, sparkPostRecipientsQuery } from "../../../lib/sanity-queries";

const sparkPostToken = process.env.SPARKPOST_CLIENT_TOKEN;
const sparkPostEndpoint = process.env.SPARKPOST_ENDPOINT;

export default async function sendNotification(messageData: any) {
  console.log(sparkPostToken);
  if (!sparkPostToken) { console.error('Env: No SparkPost token defined'); return };
  if (!sparkPostEndpoint) { console.error('Env: No SparkPost endpoint defined'); return };

  const recipients: SparkPostRecipients = await client.fetch(sparkPostRecipientsQuery);
  
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

  console.log(JSON.stringify(sparkPostBody))

  const response = await fetch(
    sparkPostEndpoint + '/transmissions/10',
    {
      method: 'POST',
      headers: {
        'Authorization': sparkPostToken
      },
      body: JSON.stringify(sparkPostBody)
    }
  ).then(res => {
    console.log(res);
    return res;
  });

  return response;
}
