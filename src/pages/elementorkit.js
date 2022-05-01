import React from "react";
import CardMd from "../components/cards/CardMd";
import CateAndSortBar from "../components/CateAndSortBar";
import CategoryPageHeader from "../components/CategoryPageHeader";
import Container from "../components/Container";
import Layout from "../components/Layout/Layout";
import PrimaryNav from "../components/Layout/Nav/PrimaryNav";
import SecondaryNav from "../components/Layout/Nav/SecondaryNav";
import { webUikitsData } from "../data";

const elementorkit = () => {
  return (
    <Layout title="UI Bucket">
      <PrimaryNav />
      <SecondaryNav />
      <CategoryPageHeader
        categoryTitle="Premium Elementor Kit"
        categoryDesc="Our marketplace of digital assets helps independent designers earn a living doing what they love while giving you the perfect building blocks for your creative projects. "
      />
      <CateAndSortBar />
      <section className="pt-12 pb-20">
        <Container>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {webUikitsData.map((data) => (
              <CardMd
                productThumb={data.templateThumb}
                productTitle={data.title}
                key={data.id}
              />
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <button className="bg-blue text-white rounded-[11px] px-10 py-5 font-medium ">
              Load More
            </button>
          </div>
        </Container>
      </section>
    </Layout>
  );
};

export default elementorkit;
