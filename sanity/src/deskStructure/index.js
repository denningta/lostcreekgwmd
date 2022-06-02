import S from '@sanity/desk-tool/structure-builder';
import siteSettings from './siteSettings';
import marketingSite from './marketing-site/marketingSite';
import blog from './blog/blog';
import { BsFillCalendarWeekFill } from 'react-icons/bs';

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
  ].includes(listItem.getId())

export default () =>
  S.list()
    .title('Base')
    .items([
      S.listItem().title('Ground Water Metings').icon(BsFillCalendarWeekFill)
      .child(S.editor().schemaType('nextMeeting').documentId('nextMeeting').title('Meetings')),
      siteSettings,
      marketingSite,
      blog,
      ...S.documentTypeListItems()
        .filter(hiddenDocTypes)
    ])