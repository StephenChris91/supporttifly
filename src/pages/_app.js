import "@/styles/globals.css";
import App from 'next/app';
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";


// Customize Chakra UI theme if needed
const theme = extendTheme({
  // Add your custom theme configurations here
});

const AppComponent = ({ Component, pageProps }) => {
    return (
      <ChakraProvider theme={theme}>
        <CSSReset />
          <Component {...pageProps} />
      </ChakraProvider>
  )
};

AppComponent.getInitialProps = async (appContext) => {
  let pageProps = {};
  if (appContext.Component.getInitialProps) {
      pageProps = await appContext.Component.getInitialProps(appContext.ctx);
  }
  return { ...pageProps }
};

export default App;
