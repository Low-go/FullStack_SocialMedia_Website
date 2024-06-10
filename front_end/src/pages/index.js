import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PageContent from "@/components/Layout/Layout/PageContent";
import CreatePostLink from "@/components/Layout/MainContent/CreatePostLink";
import Posts from "@/components/Posts/PostForm/Posts";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <PageContent>
      <>
        <CreatePostLink/>
        <Posts/>
      </>
      <><div></div></>
    </PageContent>
  );
}

export default Home;
