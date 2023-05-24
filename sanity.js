import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    projectId: 'lt6smir2',
    dataset: 'production',
    apiVersion: "2023-04-20", // The latest API version at the time of writing
    useCdn: true, // Enable CDN caching
};

export const sanityClient = createClient(config);

export const urlFor = (source) => createImageUrlBuilder(config).image(source)

