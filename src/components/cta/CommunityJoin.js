import React from "react";
import Link from "next/link";
import { FaSkype, FaDiscord } from "react-icons/fa";
export default function CommunityJoin() {
  return (
    <>
      <section className="py-14 commuinity-cta-bg bg-blue px-4">
        <div className="container mx-auto">
          <div className="max-w-xl mx-auto mb-12 text-center text-white">
            <div className="mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-5">
                Join Our Skype & Discord Community
              </h3>
              <p className="text-base">
                Bibendum neque egestas congue quisque egestas diam.
              </p>
            </div>
            <div className="community-join-btn flex flex-col sm:flex-row justify-center gap-5">
              <Link href="/" passHref>
                <a className="flex items-center justify-center flex-shrink-0 bg-orange rounded-[11px] py-3 px-5 text-base">
                  <FaSkype className="mr-2" />
                  Join Skype
                </a>
              </Link>
              <Link href="/" passHref>
                <a className="flex items-center justify-center flex-shrink-0 bg-orange rounded-[11px] py-3 px-5 text-base">
                  <FaDiscord className="mr-2" />
                  Join Discord
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
