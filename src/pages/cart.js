import React from "react";
import CartList from "../components/CartList";
import Layout from "../components/Layout/Layout";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import PageHeader from "../components/PageHeader";

export default function cart() {
  return (
    <Layout title="Cart">
      <PrimaryNav />
      <PageHeader />
      <CartList />
    </Layout>
  );
}
