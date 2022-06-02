export default {
  name: 'nextMeeting',
  title: 'Next Meeting',
  type: 'document',
  groups: [
    {
      name: 'lostCreek',
      title: 'Lost Creek'
    },
    {
      name: 'commission',
      title: 'Groundwater Commission'
    }
  ],
  fields: [
    {
      name: 'lostCreekDate',
      title: 'Lost Creek GWMD Water Board Meeting Date',
      type: 'datetime',
      group: 'lostCreek'
    },
    {
      name: 'lostCreekLocation',
      title: 'Location of the LCGWMD Water Board Meeting',
      type: 'string',
      group: 'lostCreek'
    },
    {
      name: 'lostCreekInfo',
      title: 'Additional information for the LCGWMD Water Board Meeting',
      type: 'array',
      of: [{ type: 'block'}],
      group: 'lostCreek'
    },
    {
      name: 'commissionDate',
      title: 'Groundwater Commission Meeting Date',
      type: 'datetime',
      group: 'commission'
    },
    {
      name: 'commissionLocation',
      title: 'Groundwater Commission Meeting Location',
      type: 'string',
      group: 'commission'
    },
    {
      name: 'commissionInfo',
      title: 'Additional information for the Groundwater Commission Meeting',
      type: 'array',
      of: [{ type: 'block'}],
      group: 'commission'
    },
  ]
}