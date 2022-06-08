import S from '@sanity/desk-tool/structure-builder';
import siteSettings from './siteSettings';
import marketingSite from './marketing-site/marketingSite';
import blog from './blog/blog';
import { BsFillCalendarWeekFill } from 'react-icons/bs';
import { AiFillMessage } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';

// React-icon https://react-icons.github.io/react-icons


const hiddenDocTypes = listItem => ![
    'siteSettings',
    'route',
    'navItem',
    'socialConnection',
    'post',
    'author',
    'category',
    'ctaSection',
    'featureList',
    'featureSummary',
    'footer',
    'hero',
    'logoCloud',
    'metrics',
    'team',
    'testimonial',
    'landingPage',
    'callToAction',
    'postList',
    'testimonialSection',
    'genericHeader',
    'form',
    'series',
    'introduction',
    'contactMessage',
    'reportMessage',
    'requestMessage',
    'navItemList',
    'customHome',
    'nextMeeting',
    'notificationEmail'
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Meetings').icon(BsFillCalendarWeekFill)
        .child(S.editor().schemaType('nextMeeting').documentId('nextMeeting').title('Meetings')),
      S.listItem().title('Messages').icon(AiFillMessage)
        .child(S.list().title('Messages').items([
          S.listItem().title('Contact Messages').child(S.documentTypeList('contactMessage').defaultOrdering([{field: 'createdAt', direction: 'desc'}])),
          S.listItem().title('Water Level Verification Messages').child(S.documentTypeList('requestMessage').defaultOrdering([{field: 'createdAt', direction: 'desc'}])),
          S.listItem().title('Violation Report Messages').child(S.documentTypeList('reportMessage').defaultOrdering([{field: 'createdAt', direction: 'desc'}])),
        ])),
      S.listItem().title('Notifications').icon(MdNotifications).child(
        S.documentTypeList('notificationEmail').title('Notification Emails')
      ),
      marketingSite,
      blog,
      siteSettings,
      ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])