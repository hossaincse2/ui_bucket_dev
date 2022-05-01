import React from "react";
import CheckOut from "../components/CheckOut";
import Layout from "../components/Layout/Layout";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import PageHeader from "../components/PageHeader";

export default function checkout() {
  return (
    <Layout title="Checkout">
      <PrimaryNav />
      <PageHeader />
      <CheckOut />
    </Layout>
  );
}
