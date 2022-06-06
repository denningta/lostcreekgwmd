import React from 'react';
import { IoWarning } from 'react-icons/io5';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default {
  name: 'reportMessage',
  title: 'Violation Report Message',
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
      name: 'message',
      title: 'Message',
      type: 'text',
      readOnly: true
    },
    {
      name: 'createdAt',
      title: 'Submitted At',
      type: 'date',
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
      message: 'message',
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
          statusColor = 'tomato'
      }

      console.log(status, statusColor)

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
            {status === 'new' && <IoWarning />}
            {status === 'read' && <IoWarning />}
            {status === 'resolved' && <BsFillCheckCircleFill />}
            {typeof status === 'undefined' && <IoWarning />}
          </div>;

      return {
        title: `${title} - ${new Date(createdAt)}`,
        subtitle: `Violation Report: ${message}`,
        media: statusIcon
      }
    }
  }
}