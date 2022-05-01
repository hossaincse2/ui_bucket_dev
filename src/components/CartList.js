import Image from "next/image";
import Link from "next/link";
import React from "react";
import cartImg from "/public/assets/img/cart-product.png";

export default function CartList() {
  return (
    <section className="-top-450">
      <div className="container mx-auto px-4 lg:px-0">
        <h2 className="text-5xl text-center text-white mb-20">Cart (03)</h2>
        <div className="max-w-4xl mx-auto bg-white rounded-[30px] p-10 shadow-lg mb-24">
          <ul>
            <li className="grid grid-cols-3 border-b-half">
              <span className="text-base2">Name</span>
              <span className="ml-auto text-base2">Price</span>
              <span className="ml-auto text-base2">Action</span>
            </li>
            <li className="py-5 grid grid-cols-3 items-center border-b-half">
              <div className="single-cart-product flex">
                <div className="product-thumb mr-4">
                  <Image src={cartImg} alt="Product" />
                </div>
                <div className="product-desc">
                  <h5 className="text-base font-semibold pr-4">
                    Mixkit - Design + Code Premuim Kit
                  </h5>
                  <span className="text-[11px]">Product by Uibucket LLC</span>
                </div>
              </div>
              <div className="ml-auto">
                <span>$100</span>
              </div>
              <div className="ml-auto">
                <button className="text-error text-[14px] font-semibold">
                  Remove
                </button>
              </div>
            </li>
            <li className="py-5 grid grid-cols-3 items-center border-b-half">
              <div className="single-cart-product flex">
                <div className="product-thumb mr-4">
                  <Image src={cartImg} alt="Product" />
                </div>
                <div className="product-desc">
                  <h5 className="text-base font-semibold pr-4">
                    Mixkit - Design + Code Premuim Kit
                  </h5>
                  <span className="text-[11px]">Product by Uibucket LLC</span>
                </div>
              </div>
              <div className="ml-auto">
                <span>$100</span>
              </div>
              <div className="ml-auto">
                <button className="text-error text-[14px] font-semibold">
                  Remove
                </button>
              </div>
            </li>
            <li className="py-5 grid grid-cols-3 items-center border-b-half">
              <div className="single-cart-product flex">
                <div className="product-thumb mr-4">
                  <Image src={cartImg} alt="Product" />
                </div>
                <div className="product-desc">
                  <h5 className="text-base font-semibold pr-4">
                    Mixkit - Design + Code Premuim Kit
                  </h5>
                  <span className="text-[11px]">Product by Uibucket LLC</span>
                </div>
              </div>
              <div className="ml-auto">
                <span>$100</span>
              </div>
              <div className="ml-auto">
                <button className="text-error text-[14px] font-semibold">
                  Remove
                </button>
              </div>
            </li>
            <li className="grid grid-cols-3 py-3">
              <div className="font-semibold">Subtotal</div>
              <div className="ml-auto">$300</div>
              <div></div>
            </li>
            <li className="grid grid-cols-3 border-b-half py-3">
              <div className="font-semibold">Tax</div>
              <div className="ml-auto">$10</div>
              <div className=""></div>
            </li>
            <li className="grid grid-cols-3 py-3">
              <div className="font-semibold">Total</div>
              <div className="ml-auto">$310</div>
              <div className=""></div>
            </li>
          </ul>
          <Link href="/checkout">
            <a className="bg-blue flex items-center justify-center rounded-md uppercase text-white text-xl font-semibold py-5 mt-5">
              checkout
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}
