import React from 'react';
import { BiTestTube } from 'react-icons/bi';
import { BsFillCheckCircleFill } from 'react-icons/bs';

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
    },
    {
      name: 'createdAt',
      title: 'Submitted At',
      type: 'datetime',
      readOnly: true,
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          {title: 'New', value: 'new'},
          {title: 'Read', value: 'read'},
          {title: 'Resolved', value: 'resolved'}
        ]
      }
    }
  ],
  initialValue: {
    status: 'new'
  },
  preview: {
    select: {
      title: 'name',
      message: 'comments',
      status: 'status',
      createdAt: 'createdAt'
    },
    prepare({ title, message, status, createdAt }) {
      let statusColor;
      switch (status) { 
        case 'resolved':
          statusColor = 'darkgray';
          break;
        case 'read':
          statusColor = 'darkgray';
          break;
        default:
          statusColor = 'magenta'
      }

      console.log(title, status, statusColor)

      const statusIcon = 
          <div 
            style={{
              color: statusColor, 
              width: '100%', 
              height: '100%', 
              backgroundColor: 'white', 
              display: 'flex',
              flex: 'items-center',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {status === 'new' && <BiTestTube />}
            {status === 'read' && <BiTestTube />}
            {status === 'resolved' && <BsFillCheckCircleFill />}
            {typeof status === 'undefined' && <BiTestTube />}
          </div>;

      return {
        title: `${title} - ${new Date(createdAt)}`,
        subtitle: `Water Lvl Request: ${message}`,
        media: statusIcon
      }
    }
  }
}