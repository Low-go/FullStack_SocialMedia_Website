import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import PageContent from "@/components/Layout/Layout/PageContent";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  return (
    <PageContent>
      <><div>LHS</div></>
      <><div>RHS</div></>
    </PageContent>
  );
}

export default Home;
