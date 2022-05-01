import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="bg-blue h-screen flex items-center justify-center">
      <div className="container mx-auto px-5 lg:px-0">
        <div className="hero-content max-w-2xl mx-auto text-center">
          <h1 className="text-2xl  lg:text-5xl  font-bold text-white mb-7">
            Where creativity Meets productivity
          </h1>
          <p className="text-base text-white mb-8">
            Bibendum neque egestas congue quisque egestas diam. Nunc consequat
            interdum varius sit amet. Volutpat est velit egestas dui id ornare
            arcu odio.
          </p>
          <Link href="/browseall">
            <a className="bg-orange font-bold text-white py-4 px-5 rounded-[11px] text-base">
              Browse All Resources
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
