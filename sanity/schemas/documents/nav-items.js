export default {
  name: 'navItem',
  title: 'Navigation Item',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Navigation Title',
      description: 'Ex: Home, About, etc.  The displayed text of the navigation item.',
      type: 'string',
      validation: Rule => Rule.max(50).warning(`A nav item should not have more than 50 characters.`)
    },
    {
      name: 'subNavItems',
      title: 'Sub Navigation Items',
      description: 'Navigation items that appear indented and/or expandable under this navigation item.',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string'
            },
            {
              name: 'route',
              title: 'Route',
              type: 'reference',
              to: [
                {type: 'landingPage'},
                {type: 'post'}
              ]
            }
          ]
        }
      ]
    },
    {
      name: 'route',
      title: 'Route',
      description: 'When the nav item is clicked, where should the user be sent?',
      type: 'reference',
      to: [
        {type: 'landingPage'},
        {type: 'post'}
      ]
    }
  ]
}