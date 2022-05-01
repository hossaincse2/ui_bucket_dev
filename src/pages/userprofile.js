import React from "react";
import Layout from "../components/Layout/Layout";
import NavLoggedIn from "../components/Layout/Nav/NavLoggedIn";
import MyDownloads from "../components/MyDownloads";
import Profile from "../components/Profile";
import { RiArrowRightSLine } from "react-icons/ri";
import { HiChevronDoubleRight } from "react-icons/hi";

const userprofile = () => {
  return (
    <Layout title="Kelly Gutierrez">
      <NavLoggedIn bgLight />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3">
          <div className="max-w-3xl">
            <Profile />
          </div>
          <div className="lg:col-span-2 max-w-2xl px-4">
            <div className="flex justify-between pt-10 pb-5">
              <h3 className="font-medium">My Downloads</h3>
              <select name="" id="" className="rounded-sm border-gray">
                <option value="1">Download</option>
                <option value="1">Collection</option>
              </select>
            </div>
            <div className="space-y-5">
              <MyDownloads />
              <MyDownloads />
              <MyDownloads />
              <MyDownloads />
            </div>
            <div className="flex gap-x-3 py-4">
              <button className="bg-blueTwo py-1 rounded-sm px-2">1</button>
              <button className="bg-blueTwo py-1 rounded-sm px-2">2</button>
              <button className="flex items-center bg-blueTwo py-1 rounded-sm px-2">
                <span>Next</span>
                <RiArrowRightSLine />
              </button>
              <button className="flex items-center bg-blueTwo py-1 rounded-sm px-2">
                <span>Last</span>
                <HiChevronDoubleRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default userprofile;
