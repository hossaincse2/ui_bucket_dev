import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Rating from "./Rating";
import Image from "next/image";
import Quote from "../../public/assets/img/quote.svg";
SwiperCore.use([Navigation]);

const Testimonials = () => {
  const swiperOption = {
    slidesPerView: 3,
    speed: 700,
    spaceBetween: 30,
    slidesPerGroup: 2,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      991: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  };
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="section-title max-w-2xl text-center mx-auto mb-8">
          <h2 className="text-2xl lg:text-4xl font-semibold mb-3">
            Loved by user from all over the world
          </h2>
          <p className="text-base px-4">
            Orci eu lobortis elementum nibh tellus molestie nunc non. Volutpat
            odio facilisis mauris sit amet massa vitae. Mi eget mauris pharetra
            et.
          </p>
        </div>
        <div>
          <Swiper {...swiperOption}>
            <SwiperSlide>
              <div className="testimonial-card bg-white rounded-xl p-8 border-1 border-softWhite">
                <Image src={Quote} alt="Icon" />
                <p className="text-base mb-4">
                  Eget aliquet nibh praesent tristique magna sit. Ac odio tempor
                  orci dapibus ultrices in. Tincidunt praesent semper feugiat
                  nibh. Diam sollicitudin tempor id eu nisl nunc mi
                </p>
                <Rating />
                <p className="text-base2 font-semibold mt-4">Minar</p>
                <small>UX/UI Designer</small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card bg-white rounded-xl p-8 border-1 border-softWhite">
                <Image src={Quote} alt="Icon" />
                <p className="text-base mb-4">
                  Eget aliquet nibh praesent tristique magna sit. Ac odio tempor
                  orci dapibus ultrices in. Tincidunt praesent semper feugiat
                  nibh. Diam sollicitudin tempor id eu nisl nunc mi
                </p>
                <Rating />
                <p className="text-base2 font-semibold mt-4">Minar</p>
                <small>UX/UI Designer</small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card bg-white rounded-xl p-8 border-1 border-softWhite">
                <Image src={Quote} alt="Icon" />
                <p className="text-base mb-4">
                  Eget aliquet nibh praesent tristique magna sit. Ac odio tempor
                  orci dapibus ultrices in. Tincidunt praesent semper feugiat
                  nibh. Diam sollicitudin tempor id eu nisl nunc mi
                </p>
                <Rating />
                <p className="text-base2 font-semibold mt-4">Minar</p>
                <small>UX/UI Designer</small>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
