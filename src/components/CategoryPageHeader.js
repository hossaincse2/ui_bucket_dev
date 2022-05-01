import React from "react";

export default function CategoryPageHeader({ categoryTitle, categoryDesc }) {
  return (
    <section className="pt-24 pb-16">
      <div className="container mx-auto px-4 xl:px-0">
        <div className="max-w-2xl text-center mx-auto">
          <h2 className="text-2xl lg:text-4xl font-semibold text-[#222223] mb-4">
            {categoryTitle}
          </h2>
          <p className="text-base text-[#6B7B8A]">{categoryDesc}</p>
        </div>
      </div>
    </section>
  );
}
