import React from "react";
import AnimationSubMenu from "./AnimationSubMenu";
import CodedTemplate from "./CodedTemplate";
import IconMenu from "./IconMenu";
import IllustrationSubMenu from "./IllustrationSubMenu";
import MobileUiKit from "./MobileUiKit";
import WebAppUiKit from "./WebAppUiKit";

export default function SecondaryNav() {
  return (
    <section className="bg-[#f6f6f6] py-7 hidden lg:block">
      <div className="container mx-auto">
        <div className="flex gap-x-12 justify-center">
          <CodedTemplate />
          <MobileUiKit />
          <WebAppUiKit />
          <IllustrationSubMenu />
          <AnimationSubMenu />
          <IconMenu />
        </div>
      </div>
    </section>
  );
}
