import React from "react";
import type { NextPageWithLayout } from "./_app";
import type { ReactElement } from "react";
import Layout from "../components/layout";

import Landing from "../components/landing";

const Home: NextPageWithLayout = () => {
  return <Landing />;
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
export default Home;
