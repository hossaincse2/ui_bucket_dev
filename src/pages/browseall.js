import React from "react";
import AnmationProduct from "../components/AnimationProduct";
import BrowseAllHeader from "../components/BrowseAllHeader";
import Illustration from "../components/Illustration";
import Layout from "../components/Layout/Layout";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import SecondaryNav from "../components/Layout/Nav/SecondaryNav";
import MobileApps from "../components/MobileApps";
import WebUi from "../components/WebUi";

const browseall = () => {
  return (
    <Layout title="Browse All - UI Bucket">
      <PrimaryNav />
      <SecondaryNav />
      <BrowseAllHeader />
      <WebUi />
      <MobileApps />
      <Illustration />
      <AnmationProduct />
    </Layout>
  );
};

export default browseall;
