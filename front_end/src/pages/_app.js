import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import {theme } from '../chakra/theme.js';
import Layout from "@/components/Layout/layout.js";

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme = {theme}>
      <Layout>
        <Component {...pageProps}/>
      </Layout>
    </ChakraProvider>
  );
}
