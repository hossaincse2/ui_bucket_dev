import React from "react";
import Faq from "../components/Faq";
import Layout from "../components/Layout/Layout";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import PricePack from "../components/PricePack";

export default function Price() {
  return (
    <Layout>
      <PrimaryNav />
      <PricePack />
      <Faq />
    </Layout>
  );
}
