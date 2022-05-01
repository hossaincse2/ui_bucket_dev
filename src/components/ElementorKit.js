import React from "react";
import CardHeader from "./cards/CardHeader";
import CardMd from "./cards/CardMd";
import { codedTempData } from "../data";
import Container from "./Container";

export default function ElementorKit() {
  return (
    <section className="py-24 bg-skyblue">
      <Container>
        <CardHeader templateType="Elementor Kit" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {codedTempData.map((data) => (
            <CardMd
              productThumb={data.templateThumb}
              productTitle={data.title}
              key={data.id}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
