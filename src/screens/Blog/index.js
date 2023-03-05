import Layout from "../../components/Layout";
import { RxDoubleArrowDown } from "react-icons/rx";
import BlogCard from "../../components/Blog/BlogCard";
import { v4 as uuidv4 } from "uuid";
import { useEffect, useState } from "react";

const Blog = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);

  const handleButton = () => {
    return window.scroll({
      top: 600,
      left: 0,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <div className="pb-[200px]">
        <div className="h-auto pt-20 pb-20 lg:pb-[60] w-100 p-3 bg-gradient-to-tr from-[#b5e4ff] to-[#d2fffa]">
          <div className="md:w-[70%] lg:w-[60%] mx-auto rounded-lg pt-[50px] p-5">
            <div className="uppercase md:text-center text-gray-800 pb-3 text-[15px] font-light">
              Spiral energy{" "}
              <span className="text-secondary font-semibold">Updates</span>
            </div>
            <div className="text-start md:text-center font-Kanit font-semibold text-[40px] leading-[55px] text-gray-800">
              Catch-up with the latest updates on spiral energy meters.
            </div>
            <div className="font-light md:text-center pt-3">
              Provide your email address to receive update on all put news
              release and features on our meters
            </div>
            {/* input */}
            <div className="w-[100%] md:w-[70%] mx-auto lg:w-[60%]">
              <div className="flex mt-6 items-center justify-between  p-1 rounded-full bg-white">
                <div className="w-[70%]">
                  <input
                    className="w-[95%] placeholder:font-light px-2 outline-none border-none"
                    type={"text"}
                    placeholder="Enter you email address..."
                  />
                </div>
                <div className="bg-gray-900 rounded-full cursor-pointer">
                  <div className="text-white font-light px-4 py-2 text-md">
                    Send mail
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <div className="flex items-center justify-center mt-10">
                {/* Contact Sales */}
                <div
                  className=" cursor-pointer p-4 rounded-full"
                  onClick={handleButton}
                >
                  <RxDoubleArrowDown size={35} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[90%] mx-auto ">
          <div className="font-kanit font-semibold text-2xl text-gray-800 mt-6 pb-2">
            Updates
          </div>
          <div className="">
            <hr style={{}} className="" />
          </div>
        </div>
        {/* blog items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto mt-20 gap-20">
          {Array.from(Array(5)).map((i) => (
            <BlogCard ky={uuidv4()} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
