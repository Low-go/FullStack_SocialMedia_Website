import Head from "next/head";
import PageContent from "@/components/Layout/MainContent/PageContent";
import CreatePostLink from "@/components/Layout/MainContent/CreatePostLink";
import Posts from "@/components/Posts/PostForm/Posts";
import UserBioScreen from "@/components/Layout/MainContent/UserBioScreen";

const Home = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" />
      </Head>
      <PageContent>
        <>
          <CreatePostLink />
          <Posts />
        </>
        <UserBioScreen />
      </PageContent>
    </>
  );
};

export default Home;
