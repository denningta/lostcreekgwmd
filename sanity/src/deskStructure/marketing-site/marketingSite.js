import S from '@sanity/desk-tool/structure-builder'
import { GoGlobe } from 'react-icons/go';
import { SiMarketo } from 'react-icons/si';
import { MdOutlineCallToAction } from 'react-icons/md';
import { FaThList } from 'react-icons/fa';

export default S.listItem().title('Website').icon(GoGlobe)
.child(
  S.list().title('Website')
    .items([
      S.listItem().title('Pages').icon(SiMarketo)
        .schemaType('landingPage')
        .child(S.documentTypeList('landingPage').title('Landing Pages')),
      S.listItem().title('Sections by Category').icon(FaThList)
        .child(
          S.list().title('Sections')
            .items([
              S.listItem().title('Hero Sections').child(S.documentTypeList('hero')),
              S.listItem().title('Generic Headers').child(S.documentTypeList('genericHeader')),
              S.listItem().title('Feature Summary').child(S.documentTypeList('featureSummary')),
              S.listItem().title('Feature List').child(S.documentTypeList('featureList')),
              S.listItem().title('CTA Section').child(S.documentTypeList('ctaSection')),
              S.listItem().title('Metrics Section').child(S.documentTypeList('metrics')),
              S.listItem().title('Logo Cloud').child(S.documentTypeList('logoCloud')),
              S.listItem().title('Team Section').child(S.documentTypeList('team')),
              S.listItem().title('Testimonial Section').child(S.documentTypeList('testimonialSection')),
              S.listItem().title('Introduction').child(S.documentTypeList('introduction')),
              S.listItem().title('Blog Post List').child(S.documentTypeList('postList')),
              S.listItem().title('Footer').child(S.documentTypeList('footer')),
              S.listItem().title('Forms').child(S.documentTypeList('form')),
            ])
        ),
      S.listItem().title('Calls to Action (CTA)').icon(MdOutlineCallToAction)
        .schemaType('callToAction')
        .child(S.documentTypeList('callToAction').title('Calls to Action (CTA)')),
    ])
)