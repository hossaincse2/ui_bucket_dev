import Link from "next/link";
import React from "react";

export default function BrowseCta() {
  return (
    <>
      <section className="browse-cta py-36 bg-blue px-4">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold mb-10">
              Get Ultimate Library of Resources for Smart Creatives
            </h2>
            <Link href="/" passHref>
              <a className="bg-orange rounded-[11px] px-8 py-4 font-bold inline-block">
                Browse Now
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
