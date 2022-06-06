import React from 'react';
import { AiFillMessage } from 'react-icons/ai';
import { BsFillCheckCircleFill } from 'react-icons/bs';

export default {
  name: 'contactMessage',
  title: 'Contact Message',
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
  orderings: [
    {
      title: 'Submitted At',
      name: 'createdAtDesc',
      by: [
        {field: 'createdAt', direction: 'desc'}
      ]
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
          statusColor = 'mediumseagreen'
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
            {status === 'new' && <AiFillMessage />}
            {status === 'read' && <AiFillMessage />}
            {status === 'resolved' && <BsFillCheckCircleFill />}
            {typeof status === 'undefined' && <AiFillMessage />}
          </div>;

      return {
        title: `${title} - ${new Date(createdAt)}`,
        subtitle: `Contact Msg: ${message}`,
        media: statusIcon
      }
    }
  }
}