import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Link from "next/link";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGoogle,
  FaTwitter,
  FaTimesCircle,
} from "react-icons/fa";

export default function SignUpModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className={`lg:flex items-center justify-center flex-shrink-0`}>
        <button
          type="button"
          onClick={openModal}
          className="px-10 py-5 text-sm font-medium text-white bg-blue rounded-md focus:outline-none "
        >
          Sign Up
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full p-6 my-8 overflow-hidden  align-middle transition-all transform">
                <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg py-16 px-16 mt-20 relative">
                  <div className="absolute right-6 top-4">
                    <button type="button" className="" onClick={closeModal}>
                      <FaTimesCircle className="w-6 h-6 text-[#B1BAC7]" />
                    </button>
                  </div>
                  <div className="text-center">
                    <h3 className="text-3xl font-semibold mb-8">Sign Up</h3>
                    <p className="text-base mb-10">
                      Let&apos;s sign Up first enter into “uibucket” website!
                    </p>
                  </div>
                  <div className="social-profile">
                    <div className="grid lg:grid-cols-2 md:grid-cols-2 gap-x-10 gap-y-5">
                      <Link href="/" passHref>
                        <a className="google  flex items-center rounded-md text-white py-7  px-11">
                          <FaGoogle className="text-xl" />
                          <span className="font-bold pl-5">
                            Continue with Google
                          </span>
                        </a>
                      </Link>
                      <Link href="/" passHref>
                        <a className="facebook flex items-center rounded-md text-white py-7 px-11">
                          <FaFacebookSquare className="text-xl" />
                          <span className="font-bold pl-5">
                            Continue with Facebook
                          </span>
                        </a>
                      </Link>
                      <Link href="/" passHref>
                        <a className="dribble  flex items-center rounded-md text-white py-7 px-11">
                          <FaDribbble className="text-xl" />
                          <span className="font-bold pl-5">
                            Continue with Dribbble{" "}
                          </span>
                        </a>
                      </Link>
                      <Link href="/" passHref>
                        <a className="twitter  flex items-center rounded-md text-white py-7 px-11">
                          <FaTwitter className="text-xl" />
                          <span className="font-bold pl-5">
                            Continue with Twitter
                          </span>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="text-center pt-10 pb-8">
                    <div className="border-bottom"></div>
                    <span className="flex justify-center items-center bg-white text-[#9FADB9] h-10 w-28 font-bold p-4 -mt-6 mx-auto">
                      Or
                    </span>
                  </div>
                  <div className="signin-wrapper">
                    <form action="">
                      <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div className="mb-5">
                          <label className="block mb-3 text-left">
                            First Name
                          </label>
                          <input
                            type="text"
                            placeholder="First Name"
                            className="form-control bg-lightblueTwo px-7 min-w-full h-16 rounded-md border-1 border-gray focus:outline-none"
                          />
                        </div>
                        <div className="mb-5">
                          <label className="block mb-3 text-left">
                            Last Name
                          </label>
                          <input
                            type="text"
                            placeholder="Last Name"
                            className="form-control bg-lightblueTwo px-7 min-w-full h-16 rounded-md border-1 border-gray focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="mb-5">
                        <label className="block mb-3 text-left">Email</label>
                        <input
                          type="email"
                          placeholder="Enter email"
                          className="form-control bg-lightblueTwo px-7 min-w-full h-16 rounded-md border-1 border-gray focus:outline-none"
                        />
                      </div>
                      <div className="grid lg:grid-cols-2 lg:gap-10">
                        <div className="mb-5">
                          <label className="block mb-3 text-left">
                            Password
                          </label>
                          <input
                            type="password"
                            placeholder="********"
                            className="form-control bg-lightblueTwo px-7 min-w-full h-16 rounded-md border-1 border-gray focus:outline-none"
                          />
                        </div>
                        <div className="mb-5">
                          <label className="block text-left  mb-3">
                            Confirm Password
                          </label>
                          <input
                            type="password"
                            placeholder="********"
                            className="form-control bg-lightblueTwo px-7 min-w-full h-16 rounded-md border-1 border-gray focus:outline-none"
                          />
                        </div>
                      </div>
                      <div className="mb-6 mt-2 flex items-center">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="mr-3 h-5 w-5"
                        />
                        <label className="text-base font-medium">
                          I agree to all Terms and Privacy Policy{" "}
                        </label>
                      </div>
                      <p>
                        Already a member?
                        <Link href="/" passHref>
                          <a className="text-base2 font-bold text-blue ml-1">
                            Sign In
                          </a>
                        </Link>
                      </p>
                      <div className="mt-5">
                        <Link href="/" passHref>
                          <a
                            role="button"
                            className="bg-blue text-center h-20 flex items-center justify-center rounded-md text-base2 font-bold text-white"
                          >
                            Sign Up
                          </a>
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
