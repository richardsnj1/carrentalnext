/// library
import React from "react";
import Image from "next/image";

/// component
import Navbar from "../components/navbar";
import Link from "next/link";

/// asset
import BannerLogin from "../../../public/images/banner_left.png";
import googol from "../../../public/images/googlelogo.png";
import facebook from "../../../public/images/facebook.png";

function signin() {
  return (
    <>
      <Navbar />
      <section className="h-screen">
        <div className="h-full">
          <div className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <Image src={BannerLogin} className="w-full" alt="login image" />
            </div>
            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12 pr-5">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start">
                  <p className="mb-0 mr-4 text-lg">Sign in with</p>
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <Image
                      src={googol}
                      alt="googol"
                      className="mx-auto h-3.5 w-3.5"
                    />
                  </button>
                  <button
                    type="button"
                    className="mx-1 h-9 w-9 rounded-full bg-primary uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    <Image
                      src={facebook}
                      alt="fb"
                      className="mx-auto h-3.5 w-3.5"
                    />
                  </button>
                </div>
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    className="peer border-black border-2 
                    min-h-[auto] w-full rounded-lg 
                    bg-transparent px-3 py-[0.32rem] 
                    leading-[2.15] outline-none 
                    transition-all duration-200 
                    ease-linear focus:placeholder:opacity-100 
                    data-[te-input-state-active]:placeholder:opacity-100 
                    motion-reduce:transition-none dark:text-neutral-200 
                    dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="email"
                  />
                </div>
                <div className="relative mb-6" data-te-input-wrapper-init>
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="peer border-black border-2 block min-h-[auto] w-full rounded-lg bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="password"
                  />
                </div>
                <div className="mb-6 flex items-center justify-between">
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] 
                      mt-[0.15rem] h-[1.125rem] w-[1.125rem] rounded-[0.25rem] 
                      border-[0.125rem] border-solid border-neutral-300 outline-none 
                      before:pointer-events-none before:absolute before:h-[0.875rem] 
                      before:w-[0.875rem] before:scale-0 before:rounded-full 
                      before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] 
                      before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] 
                      checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] 
                      checked:after:block checked:after:h-[0.8125rem] 
                      checked:after:w-[0.375rem] checked:after:rotate-45 
                      checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 
                      checked:after:border-solid 
                      checked:after:border-white checked:after:bg-transparent 
                      checked:after:content-[''] hover:cursor-pointer 
                      hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                      focus:shadow-none focus:transition-[border-color_0.2s] 
                      focus:before:scale-100 focus:before:opacity-[0.12] 
                      focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] 
                      focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute 
                      focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] 
                      focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 
                      checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] 
                      checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px 
                      checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] 
                      checked:focus:after:rotate-45 checked:focus:after:rounded-none 
                      checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 
                      checked:focus:after:border-t-0 checked:focus:after:border-solid 
                      checked:focus:after:border-white checked:focus:after:bg-transparent 
                      dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary 
                      dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] 
                      dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      id="checked"
                    />
                    <label
                      htmlFor="checked"
                      className="inline-block pl-[0.15rem] hover:cursor-pointer"
                    >
                      Remember me
                    </label>
                  </div>
                  <Link href="#">Forgot password?</Link>
                </div>
                <div className="text-center lg:text-left">
                  <button
                    type="button"
                    className="inline-block rounded bg-primary px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  >
                    Login
                  </button>
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account yet?
                    <Link
                      href="#!"
                      className="text-red-400 transition duration-150 ease-in-out hover:text-red-600 focus:text-red-600 active:text-red-700"
                    >
                      &nbsp; Register
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default signin;
