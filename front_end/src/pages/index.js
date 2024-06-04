import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PageContent from "@/components/Layout/Layout/PageContent";
import CreatePostLink from "@/components/Layout/MainContent/CreatePostLink";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <PageContent>
      <><CreatePostLink/></>
      <><div>RHS</div></>
    </PageContent>
  );
}

export default Home;
