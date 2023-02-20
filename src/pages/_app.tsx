import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import NextNProgress from 'nextjs-progressbar';

// Import Swiper styles
import 'swiper/swiper.css';
// import 'swiper/components/navigation/navigation.css';
// import 'swiper/components/pagination/pagination.css';
// import 'swiper/components/scrollbar/scrollbar.css';

// import '../styles/slider.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <NextNProgress
        color="#FFBA08"
        startPosition={0.3}
        stopDelayMs={200}
        height={5}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default App;
