export default {
  name: 'navItemLists',
  title: 'Navigation Item Lists',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'List Title',
      type: 'string'
    },
    {
      name: 'navItems',
      title: 'Navigation Items',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'navItem'}]
        }
      ]
    }
  ]
}