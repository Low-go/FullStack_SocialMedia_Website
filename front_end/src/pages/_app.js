
import { ChakraProvider } from "@chakra-ui/react";
import {theme } from '../chakra/theme.js';
import Layout from "@/components/Layout/Layout/Layout.js";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <ChakraProvider theme = {theme}>
        <Layout>
          <Component {...pageProps}/>
        </Layout>
      </ChakraProvider>
    </RecoilRoot>
  );
}
