import "@/styles/globals.css";
import App from "next/app";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";
import Layout from "@/components/Layout";
import "react-toastify/dist/ReactToastify.css";

// Customize Chakra UI theme if needed
const theme = extendTheme({
  // Add your custom theme configurations here
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};

export default MyApp;
