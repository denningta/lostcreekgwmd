export default {
  name: 'requestMessage',
  title: 'Request Message',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      readOnly: true
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      readOnly: true
    },
    {
      name: 'phoneNumber',
      title: 'Phone Number',
      type: 'string',
      readOnly: true
    },
    {
      name: 'permitNumber',
      title: 'Well Permit Number',
      type: 'string',
      readOnly: true
    },
    {
      name: 'requestedDate',
      title: 'Requested Date',
      type: 'date',
      readOnly: true
    },
    {
      name: 'requestedTime',
      title: 'Requested Time',
      type: 'string',
      readOnly: true
    },
    {
      name: 'comments',
      title: 'Comments',
      type: 'text',
      readOnly: true
    }
  ],
}