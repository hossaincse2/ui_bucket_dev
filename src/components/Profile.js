import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avatar from "/public/assets/img/avatar.png";

const Profile = () => {
  return (
    <div className="p-5">
      <div className="max-w-xl py-10">
        <div className="text-center mb-10">
          <Image
            src={Avatar}
            width={100}
            height={100}
            alt="Avatar"
            className="mb-6"
          />
          <h5 className="text-xl mb-5 font-semibold">Kelly Gutierrez</h5>
          <Link href="/" passHref>
            <a className="bg-blue px-10 py-4 inline-flex text-white text-base font-medium rounded-lg mb-7">
              Edit Profile
            </a>
          </Link>
          <h5 className="text-xl font-medium">Activity</h5>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between">
            <Link href="/my-collection" passHref>
              <a>My Collection</a>
            </Link>
            <span>0</span>
          </div>
          <div className="flex justify-between">
            <Link href="/userprofile" passHref>
              <a>Download Files</a>
            </Link>
            <span>05</span>
          </div>
        </div>
        <div className="mt-12">
          <h5 className="text-base2 font-semibold">Contact</h5>
          <p className="text-base">hello@yourmail.com</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
