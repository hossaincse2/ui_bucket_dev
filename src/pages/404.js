import Link from "next/link";
import React from "react";
import Layout from "../components/Layout/Layout";
import NotFoundImg from "/public/assets/img/404.png";
import Image from "next/image";

export default function NotFound() {
  return (
    <Layout>
      <section className="py-16">
        <div className="max-w-xl mx-auto text-center">
          <Image src={NotFoundImg} alt="" />
          <p className="mb-8 mt-10">
            This page you are looking for does not exist!
          </p>
          <Link href="/" passHref>
            <a className="bg-blue rounded-md text-white font-medium px-6 py-4">
              Bak to Home
            </a>
          </Link>
        </div>
      </section>
    </Layout>
  );
}
