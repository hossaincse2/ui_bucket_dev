import React from "react";
import Layout from "../components/Layout/Layout";
import NavLoggedIn from "../components/Layout/Nav/NavLoggedIn";
import { Link } from "next/link";
import { Image } from "next/image";
import Profile from "../components/Profile";
import MyCollections from "../components/MyCollections";

export default function mycollection() {
  return (
    <Layout title="Kelly Gutierrez">
      <NavLoggedIn bgLight />
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3">
          <div className="max-w-3xl">
            <Profile />
          </div>
          <div className="lg:col-span-2 max-w-3xl px-4">
            <div className="flex justify-between pt-10 pb-5">
              <h3 className="font-medium">My Collection</h3>
              <select name="" id="" className="rounded-sm border-gray">
                <option value="1">Download</option>
                <option value="1">Collection</option>
              </select>
            </div>
            <div className="collection">
              <MyCollections />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
