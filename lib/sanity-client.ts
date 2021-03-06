import sanityClient from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';

const client = sanityClient({
  projectId: 'q642owk9',
  dataset: 'production',
  useCdn: true,
  apiVersion: 'v2021-10-21',
  token: process.env.SANITY_CLIENT_TOKEN
});

export default client;

export const imageBuilder = (source: SanityImageSource) =>
  createImageUrlBuilder(client).image(source);
