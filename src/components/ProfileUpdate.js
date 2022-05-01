import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import Layout from "./Layout/Layout";
import Avatar from "/public/assets/img/avatar.png";

export default function ProfileUpdate() {
  return (
    <Layout>
      <div className="max-w-4xl bg-white rounded-xl mx-auto my-10 shadow-md">
        <h5 className="text-xl text-[#6B7B8A] font-semibold text-center py-9">
          Profile Update
        </h5>
        <form>
          <div className="header text-center border-t-1 border-b-1 border-gray">
            <div className="avatar text-center py-6">
              <Image src={Avatar} alt="" />
              <div className="mt-5 flex justify-center text-white">
                <input
                  type="file"
                  name="avatar"
                  id="avatar"
                  className="invisible hidden"
                />
                <label
                  htmlFor="avatar"
                  className="flex items-center bg-blue px-5 py-3 rounded-md cursor-pointer"
                >
                  <FaCloudUploadAlt className="mr-2" />
                  Upload new
                </label>
              </div>
            </div>
          </div>
          <div className="info-body py-10 px-16 border-b-1 border-[#B1BAC7]">
            <h6 className="text-[20px] mb-9 font-semibold">
              Basic Information
            </h6>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-7 gap-y-5 ">
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Your Username
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="User name here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Full name here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Your Country
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your country"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Your Profession
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your profession"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  id="fullname"
                  placeholder="hello@yourmail.com"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="flex place-items-end justify-between pb-2">
                <Link href="/" passHref>
                  <a className="bg-black text-white rounded-md px-7 py-3">
                    Change Email
                  </a>
                </Link>
                <Link href="/" passHref>
                  <a className="bg-black text-white rounded-md px-7 py-3">
                    Change Password
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="social-profile py-10 px-16">
            <h6 className="text-[20px] mb-9 font-semibold">Social Profiles</h6>
            <div className="grid lg:grid-cols-2 md:grid-cols-1 gap-x-7 gap-y-5 ">
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Twitter
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter your profile link/url here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Facebook
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your profile link/url here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Instragram
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your profile link/url here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username" className="block mb-3 font-medium">
                  Linkedin
                </label>
                <input
                  type="text"
                  id="fullname"
                  placeholder="Enter your profile link/url here"
                  className="bg-lightblueTwo h-16 px-7 focus:outline-none border-1 border-black rounded-md min-w-full"
                />
              </div>
            </div>
            <Link href="/" passHref>
              <a className="font-bold mt-10 flex bg-blue text-center justify-center text-white py-6 rounded-lg text-base2">
                Update Settings
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  );
}
