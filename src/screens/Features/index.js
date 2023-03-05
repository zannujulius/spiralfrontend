import { Link } from "react-router-dom";
import Layout from "../../components/Layout";
import { RxDoubleArrowDown } from "react-icons/rx";
import { AiOutlineCloudServer } from "react-icons/ai";
import { commandsData, whyData } from "./data";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Features = () => {
  const [searchvalue, setsearchvalue] = useState("");
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);
  const handleButton = () => {
    return window.scroll({
      top: 1500,
      left: 0,
      // bottom: 400,
      behavior: "smooth",
    });
  };
  return (
    <Layout>
      <div className="pb-[200px]">
        {/* hero */}
        <div className="bg-gradient-to-tr from-[#b5e4ff] to-[#d2fffa]">
          <div className="h-auto pt-20 pb-10 grid grid-cols-1 md:grid-cols-2 w-[90%] md:gap-5 gap-10 mx-auto">
            <div className="w-100 rounded-lg pt-[50px] flex flex-col justify-center">
              <div className="uppercase text-gray-800 pb-3 text-start md:text-start lg:text-start text-[15px] font-light">
                Spiral meter{" "}
                <span className="text-secondary font-semibold">features</span>
              </div>
              <div className="text-start md:text-start lg:text-start font-Kanit font-semibold text-[40px] leading-[55px] text-gray-800">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="mt-10">
                <a
                  target={"_blank"}
                  href="https://spiralenergy.vercel.app/createaccount"
                  className="border-[1px] w-full md:w-[300px] lg:w-[300px] md:[fit-content] block drop-shadow-md font-semibold cursor-pointer border-gray-200 px-3 lg:px-16 py-3 rounded-[30px] text-center bg-gradient-to-r from-[#110613] to-[#1e191f] text-white"
                >
                  Get Started
                </a>
                <div className=" items-center justify-center mt-10 hidden md:hidden lg:hidden">
                  {/* Contact Sales */}
                  <div className="p-4 cursor-pointer" onClick={handleButton}>
                    <RxDoubleArrowDown size={35} />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-100 h-[600px] border-[1px] border-gray-300 bg-white rounded-lg "></div>
            </div>
          </div>
          <div className="flex items-center justify-center pb-10">
            {/* Contact Sales */}
            <div className="p-4 cursor-pointer" onClick={handleButton}>
              <RxDoubleArrowDown size={35} />
            </div>
          </div>
        </div>

        {/* caption */}
        <div className="mt-[100px]">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Meter features
            </div>
            <div className="pt-2">Some features of the spiral meters</div>
          </div>

          <div className="w-full mx-autoflex item-center justify-center">
            <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 w-[90%] mx-auto gap-16">
              {whyData.map((i) => (
                <div className="" key={i.id}>
                  <div className="">
                    <AiOutlineCloudServer
                      size={50}
                      className="text-secondary"
                      color="text-secondary"
                    />
                  </div>
                  <div className="font-Kanit text-2xl text-gray-800 mt-3">
                    Lorem ipsum dolor sit amet
                  </div>
                  <div className="text-gray-700 font-light">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-[100px] bg-[#f7f6fd] p-4">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-2xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Meter features
            </div>
            <div className="mt-3 w-[90%] md:w-[70%] lg:w-[50%] mx-auto flex items-center justify-center">
              <input
                value={searchvalue}
                onChange={(e) => {
                  setsearchvalue(e.target.value);
                }}
                className="w-[95%] rounded-lg drop-shadow-md h-[50px] placeholder:font-light px-2"
                type={"text"}
                placeholder="Search for a features..."
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 w-[90%] mx-auto gap-10">
            {commandsData
              .filter((e) =>
                e.title.toLowerCase().includes(searchvalue.toLowerCase())
              )
              .map(({ id, desc, title, img }, _, arr) => (
                <div className="" key={uuidv4()}>
                  <div className="w-[100%] h-[400px] bg-white border"></div>
                  <div className="font-Kanit text-2xl text-gray-800 mt-3">
                    {title}
                  </div>
                  <div className="text-gray-700 font-light mt-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime mollitia, molestiae quas vel sint commodi repudiandae
                    consequuntur voluptatum laborum numquam blanditiis harum
                    quisquam eius sed odit
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Features;
