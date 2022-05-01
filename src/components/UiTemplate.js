import React from "react";
import CardHeader from "./cards/CardHeader";
import { codedTempData } from "../data";
import CardMd from "./cards/CardMd";

export default function UiTemplate() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4 xl:px-0">
        <CardHeader templateType="UI Template" />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {codedTempData.map((data) => (
            <CardMd
              productThumb={data.templateThumb}
              productTitle={data.title}
              key={data.id}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
