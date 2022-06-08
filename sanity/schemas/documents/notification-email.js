export default {
  name: 'notificationEmail',
  title: 'Notification Email',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string'
    },
    {
      name: 'email',
      title: 'Email',
      description: 'Send and email to this address when a new message is received',
      type: 'string'
    }
  ]
}