export default {
  name: 'customHome',
  title: 'Custom Home Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Internal Title',
      type: 'string'
    },
    {
      name: 'image',
      title: 'Main Image',
      type: 'image'
    },
    {
      name: 'content',
      title: 'Main page content',
      type: 'array',
      of: [{ type: 'block' }]
    }
    
  ]
}