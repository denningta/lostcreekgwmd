export default {
  widgets: [
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    },
    {
      name: 'document-list',
      options: {
        title: 'Recent Messages',
        order: 'createdAt desc',
        types: ['contactMessage', 'reportMessage', 'requestMessage'],
        limit: 10
      },
      layout: {
        width: 'medium'
      }
    },
    {
      name: 'vercel',
      layout: {
        width: 'full'
      }
    },
  ]
}