import React from "react";
import { webUikitsData } from "../data";
import CardMd from "./cards/CardMd";
import Container from "./Container";
import ShortingBar from "./ShortingBar";

export default function Illustration() {
  return (
    <>
      <ShortingBar catName="Animation" classes="pb-12" />
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
