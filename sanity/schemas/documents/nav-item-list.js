export default {
  name: 'navItemList',
  title: 'Navigation Item List',
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