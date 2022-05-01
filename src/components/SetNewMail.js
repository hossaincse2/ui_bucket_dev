import Link from "next/link";
import React from "react";

export default function SetNewMail() {
  return (
    <>
      <div className="bg-white p-9 shadow-xl rounded-xl mx-auto max-w-2xl mt-5">
        <div className="form-wrapper">
          <h5 className="text-lg font-semibold mb-10">Set new email</h5>
          <form>
            <label htmlFor="email" className="text-base mb-2 inline-block">
              Enter Email
            </label>
            <input
              type="text"
              placeholder="Enter your email"
              className="min-w-full h-16 border-1 border-gray rounded-md px-6 mb-7 bg-lightblueTwo focus:outline-none"
            />
            <div className="flex justify-center">
              <Link href="/" passHref>
                <a className="font-bold bg-blue px-16 text-white py-5 rounded-md text-center inline-block">
                  Update Now
                </a>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
