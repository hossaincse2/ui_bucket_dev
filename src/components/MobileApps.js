import React from "react";
import { webUikitsData } from "../data";
import ShortingBar from "./ShortingBar";
import Container from "./Container";
import CardMd from "./cards/CardMd";

export default function MobileApps() {
  return (
    <>
      <ShortingBar catName="Mobile Apps UI Kits" classes="pb-12" />
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
        </Container>
      </section>
    </>
  );
}
