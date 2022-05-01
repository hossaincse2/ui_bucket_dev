import React from "react";
import ShortingBar from "./ShortingBar";
import CardMd from "./cards/CardMd";
import { webUikitsData } from "../data";
import Container from "./Container";

export default function WebUi() {
  return (
    <>
      <ShortingBar catName="Web UI Kits" classes="pt-16 pb-12" />
      <section className="pb-20">
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
    </>
  );
}
