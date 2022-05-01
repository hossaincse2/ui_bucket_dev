import Image from "next/image";
import React from "react";
import SuccessImg from "/public/assets/img/success.png";

export default function Successfull() {
  return (
    <>
      <section className="max-w-2xl mx-auto">
        <div className="bg-white py-12 px-16 shadow-xl rounded-xl text-center">
          <div className="min-w-full">
            <Image src={SuccessImg} width="150" height="150" alt="" />
            <h3 className="text-2xl font-bold mt-4">Successfull</h3>
          </div>
        </div>
      </section>
    </>
  );
}
