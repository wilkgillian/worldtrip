import * as Prismic from '@prismicio/client';

export function getPrismicClient() {
  const prismic = Prismic.createClient('worldtri', {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN
  });

  return prismic;
}
