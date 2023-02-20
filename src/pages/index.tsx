import { Flex, Heading } from '@chakra-ui/react';
import { GetStaticProps } from 'next';
import { RichText } from 'prismic-dom';
import Head from 'next/head';
import Banner from '../components/Banner';
import Caracteristicas from '../components/Caracteristicas';
import Header from '../components/Header';
import Separador from '../components/Separador';
import Slider from '../components/Slider';
import { getPrismicClient } from '../services/prismic';

interface HomeProps {
  continents: {
    slug: string;
    title: string;
    summary: string;
    image: string;
  }[];
}

export default function Home({ continents }: HomeProps) {
  return (
    <Flex direction="column">
      <Head>
        <title>WorldTrip - Home</title>
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta property="og:title" content="WorldTrip" />
        <meta name="twitter:title" content="WorldTrip" />
      </Head>

      <Header />
      <Banner />
      <Caracteristicas />
      <Separador />

      <Heading
        textAlign="center"
        fontWeight="500"
        mb={['5', '14']}
        fontSize={['lg', '3xl', '4xl']}
      >
        Vamos nessa?
        <br />
        Então escolha seu continente
      </Heading>

      <Slider continents={continents} />
    </Flex>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

  const response = await prismic.getAllByType('continent', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc'
    },
    lang: 'pt-br'
  });

  const continents = response.map(continent => ({
    slug: continent.uid,
    title: RichText.asText(continent.data.title),
    summary: RichText.asText(continent.data.summary),
    image: continent.data.slider_image.url,
    id: continent.id
  }));

  return {
    props: {
      continents
    }
  };
};
