import {
  Author,
  BlockContent,
  CallToAction,
  Category,
  FeatureList,
  FeatureSummary,
  Footer,
  Form,
  GenericHeader,
  Introduction,
  LandingPage,
  LogoCloud,
  Metrics,
  NavItem,
  NextMeeting,
  NotificationEmail,
  Post,
  PostList,
  SanityImageAsset,
  Series,
  SiteSettings,
  SocialConnection,
} from '../interfaces/sanity-schema';
import { Hero } from '../interfaces/sanity-schema';
import { CtaSection } from '../interfaces/sanity-schema';

import groq from 'groq';

export interface SanityScheduleMetadata {
  _createdAt: string;
  _id: string;
  _rev: string;
  _type: string;
  datetime: string;
  documentId: string;
  rev: string;
  scheduledAt: string;
  user: {
    displayName: string;
    id: string;
    imageUrl: string;
  };
}

export const siteSettingsQuery = groq`*[_type == 'siteSettings'][0]`;
export type SiteSettingsGroq = SiteSettings;

export const landingPagesPathsQuery = groq`
  *[_type == 'landingPage'] { "slug": slug.current }
`;
export type LandingPagesPathsGroq = [{ slug: string }];

export const landingPageQuery = groq`
  *[_type == 'landingPage' && slug.current == $slug]{
    ...,
    "footer": footer->{
      "navItems": navItems[]->{
        ...,
        icon,
        title,
        "route": route->slug.current
      },
      socials[]->{
        ...,
        type,
        url
      }
    },
    "header": header->{
      ...,
      title,
      headline,
      subHeadline,
      image,
      callsToAction[]->{
        ...,
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
      }
    },
    "navItems": navItemList->navItems[]->{
      ...,
      title,
      "route": route->slug.current,
      "routeType": route->_type,
      "subNavItems": subNavItems[]{
        ...,
        "route": route->slug.current,
        "routeType": route->_type,
      }[]
    },
    "sections": sections[]->{
      ...,
      "imageMetaData": image.asset->,
      callsToAction[]->{
        ...,
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
      },
      _type == 'form' => {
        "siteSettings": *[_type == 'siteSettings']{
          ...
        }[0]
      }
    }

  }[0]
`;

export type LandingPageGroq = Omit<
  LandingPage,
  'footer' | 'header' | 'navItems' | 'sections'
> & {
  footer: FooterGroq;
  header: HeaderGroq;
  navItems: NavItemGroq[];
  sections: SectionGroq[];
};

export type CallToActionGroq = Omit<CallToAction, 'route'> & {
  route: {
    slug: string;
    type: 'landingPage' | 'post';
  };
};

export const blogNavItems = groq`
  *[_type == 'landingPage' && slug.current == 'blog']{
    "navItems": navItemList->navItems[]->{
      ...,
      title,
      "route": route->slug.current,
      "routeType": route->_type,
      "subNavItems": subNavItems[]{
        ...,
        "route": route->slug.current,
        "routeType": route->_type,
      }[]
    },
}[0].navItems
`;

export type NavItemGroq = Omit<Pick<NavItem, 'title'>, 'route' | 'subNavItems'> & {
  route: string;
  routeType: string;
  subNavItems: {
    title: string;
    route: string;
    routeType: string;
  }[]
};

export type IconPickerGroq = {
  _type?: string;
  name: string;
  provider: string;
};

// Sections
export type HeroGroq = Omit<Hero, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type CtaSectionGroq = Omit<CtaSection, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
};

export type GenericHeaderGroq = GenericHeader;

export type FeatureListGroq = FeatureList;

export type FeatureSummaryGroq = Omit<FeatureSummary, 'callsToAction'> & {
  callsToAction: CallToActionGroq[];
  imageMetaData: SanityImageAsset;
};

export type LogoCloudGroq = LogoCloud;

export type MetricsGroq = Metrics;

export type PostListSectionGroq = PostList;

export type HeaderGroq = HeroGroq | CtaSectionGroq | GenericHeaderGroq;

export const footerQuery = groq`
  *[_type == 'landingPage' && slug.current == $slug]{
    "footer": footer->{
      "navItems": navItems[]->{
        ...,
        icon,
        title,
        "route": route->slug.current
      },
      socials[]->{
        ...,
        type,
        url
      }
    },
  }[0].footer
`;

export type FooterGroq = Omit<Footer, 'navItems' | 'socials'> & {
  navItems: NavItemGroq[];
  socials: SocialConnection[];
};

export type FormGroq = Form & {
  siteSettings: SiteSettingsGroq
};

export type SectionGroq =
  | HeroGroq
  | CtaSectionGroq
  | FeatureListGroq
  | FeatureSummaryGroq
  | LogoCloudGroq
  | MetricsGroq
  | PostListSectionGroq
  | FormGroq
  | Introduction
  | NextMeeting;

export const postListPathsQuery = groq`
  *[_type == 'postList'] { "slug": slug.current }
`;

export type PostListPathsGroq = [{ slug: string }];

export const postsPathsQuery = groq`
  *[_type == 'post'] { "slug": slug.current }
`;

export type PostsPathsGroq = [{ slug: string }];

export const postListQuery = groq`
    *[_type == 'post'] {
      slug,
      title,
      author->,
      categories[]->,
      mainImage,
      excerpt,
      featured,
      publishedAt,
      "numberOfCharacters": length(pt::text(body)),
      // assumes 5 characters as mean word length
      // https://ux.stackexchange.com/questions/22520/how-long-does-it-take-to-read-x-number-of-characters
      "estimatedWordCount": round(length(pt::text(body)) / 5),
      // Words per minute: 180
      "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 )
    } | order(publishedAt desc)
  `;

export type PostCardGroq = {
  slug: { _type: 'slug'; current: string };
  title: string;
  author: Author;
  categories: Category[];
  mainImage: SanityImageAsset;
  excerpt: BlockContent;
  featured: boolean;
  publishedAt: string;
  numberOfCharacters: number;
  estimatedWordCount: number;
  estimatedReadingTime: number;
};

export type PostListGroq = PostCardGroq[];

export const postQuery = groq`
 *[_type == 'post' && slug.current == $slug]{
    ...,
    body[]{
      ...,
      _type == "image" => {
        ...,
        asset->
      },
      markDefs[]{
        ...,
        _type == "internalLink" => {
          "route": @.reference->slug.current,
          "routeType": @.reference->_type
        }
      }
    },
    author->,
    categories[]->,
    footerSections[]->{
      ...,
      callsToAction[]->{
        ...,
        "route": {
          "slug": pageLink->slug.current,
          "type": pageLink->_type,
        }
      }
    },
    "estimatedReadingTime": round(length(pt::text(body)) / 5 / 180 ),
    "series": *[_type == 'series' && references(^._id)]{
      ...,
      posts[]->{
        title,
        slug
      }
    }[0]
}[0]
`;

export type PostGroq = Omit<
  Post,
  'author' | 'categories' | 'footerSections'
> & {
  author: Author;
  categories: Category[];
  footerSections: SectionGroq[];
  estimatedReadingTime: number;
  series: Omit<Series, 'posts'> & {
    posts: {
      title: string;
      slug: {
        _type: string;
        current: string;
      };
    }[];
  };
};

// SparkPost recipients
export const sparkPostRecipientsQuery = groq`
  *[_type == 'notificationEmail']{
    "address": {
      email,
      name
    }
  }
`;

export type SparkPostRecipients = {
  [key in 'address']: {
    [key in 'email' | 'name']: string;
  };
}[];
