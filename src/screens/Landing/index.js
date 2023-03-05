import Layout from "../../components/Layout";
import { BsArrowRightShort } from "react-icons/bs";
import { featuresData, recData, serviceData, specData } from "./data";
import "./style.css";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import CountCard from "../../components/CountCard";
import { useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const Landing = ({}) => {
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);
  return (
    <Layout>
      <div className="pb-[100px]">
        {/* hero */}
        <div className="bg-gradient-to-tr from-[#e0c3fc40]  to-[#8ec5fc34]">
          <div className="h-auto pt-20 pb-20 w-[100%] md:w-[90%] mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-3 ">
            <div className="w-100 rounded-lg pt-[50px] p-5 flex items-center justify-center">
              <div className="">
                <div className="uppercase text-gray-800 pb-3 text-[15px] font-light">
                  Lorem Ipsum is simply...
                </div>
                <div className="text-left font-Kanit font-semibold text-[40px] leading-[55px] text-gray-800">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </div>
                <div className="text-start font-light text-gray-800 my-6">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. <br /> simply dummy text of the printing
                  and typesetting
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-1 border-teal-900 gap-5 place-content-start md:w-[70%]">
                  <a
                    to="https://spiralenergy.vercel.app/createaccount"
                    target={"_blank"}
                    className="w-100 rounded-full drop-shadow-md flex items-center justify-center font-semibold cursor-pointer border-gray-200 text-center bg-gradient-to-r from-[#110613] to-[#1e191f] "
                  >
                    <div className="text-white font-light px-3 py-3">
                      Get started
                    </div>
                  </a>
                  <div className="border-[1px] drop-shadow-sm bg-white font-light cursor-pointer border-gray-200 px-3 py-3 rounded-[30px] text-center text-gray-800">
                    Contact Sales
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <div className="w-100 h-[600px] border-[1px] border-gray-300 bg-white rounded-lg "></div>
            </div>
          </div>
        </div>
        {/* review from workers */}
        <div className=" w-[90%] mt-20 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {recData.map((i) => (
            <div
              key={i.id}
              className="bg-gradient-to-r from-[#0094e924] to-[#80d0c735] rounded-md p-4 "
            >
              <div className="font-light text-gray-700">
                <span className="italic font-bold">"</span>
                {i.title} <span className="italic font-bold">"</span>
              </div>
              <div className="mt-1">
                <div className="flex items-center">
                  <div className="w-[40px] h-[40px] rounded-full border-[1px] border-gray-50 worker-img"></div>
                  <div className="pl-1">
                    <div className="font-Kanit italic font-semibold">
                      {i.name}
                    </div>
                    <div className="italic font-light text-sm">
                      {i.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* customers */}
        <div className="mt-16 hidden">
          <div className="text-gray-800 font-Kanit font-semibold px-4 text-2xl py-2">
            Partners
          </div>
          <div className=" bg-white grid grid-cols-2">
            {Array.from(Array(4)).map((i, index) => (
              <div
                className="flex items-center justify-center p-2 "
                key={index}
              >
                <div className="italic font-semibold text-2xl text-gray-500">
                  Spiral Energy
                </div>
              </div>
            ))}{" "}
          </div>
        </div>
        {/* controls */}
        <div className=" py-6 mt-20">
          {/* <div className="test py-6 mt-20"> */}
          <div className="flex flex-col items-center justify-center px-4 mx-auto md:w-[70%] lg:w-[50%]">
            <div className=" text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Who we serve
            </div>
            <div className="font-light text-center md:text-center mx-auto pt-3">
              Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
              simply dummy text of the printing
            </div>
          </div>
          <div className="px-5 w-100 mt-2 flex items-start">
            <div className="w-[10px] hidden rounded-full h-[1400px] bg-secondary bg-gradient-to-r from-secondary to-[#cc31f701]"></div>
            <div className="grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center w-[100%] lg:w-[90%] mx-auto">
              {serviceData.map((i) => (
                <div className="p-3" key={i.id}>
                  <div className="">
                    <div
                      className="w-100 h-[300px] border bg-white rounded-lg hidden "
                      style={{
                        background: `url(${i.img})`,
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                        filter: "grayscale(100%)",
                      }}
                    >
                      {/* <img src={i.img} className="object-cover" /> */}
                    </div>
                  </div>
                  <div className="font-semibold text-2xl mt-3 font-kanit">
                    {i.title}
                  </div>
                  <hr className="w-[20%] border-[1px] border-secondary rounded-lg" />
                  <div className="font-light text-gray-700 text-[17px] pt-3">
                    {i.desc}
                  </div>
                  <div className="bg-gray-50 w-[fit-content] flex mt-5 px-3 py-2 rounded-lg cursor-pointer">
                    <div className="font-light text-[15px] pr-2 underline">
                      Read more
                    </div>
                    <div className="h-100 flex items-center justify-center pt-[1px]">
                      <BsArrowRightShort size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* section */}
        <div className="flex items-center justify-center mt-[100px] w-[100%] mx-auto md:w-[90%] ">
          <div className="w-[90%] rounded-lg section-l_bg p-4 h-[400px] flex item-center flex-col justify-center">
            <div className="font-Kanit text-start md:text-center lg:text-center font-semibold text-white text-4xl ">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="text-white pt-3 text-start md:text-center lg:text-center mx-auto w-[100%] md:w-[80%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown. Lorem Ipsum is simply dummy
              text of the printing and typesetting industry. Lorem Ipsum has
              been the industry's standard dummy text ever since the 1500s, when
              an unknown
            </div>

            <div className="flex items-center justify-center">
              <div className="flex items-center w-[fit-content] border-[1px] border-white rounded-full px-4 py-2 mt-6 cursor-pointer">
                <div className="text-white">Watch our journey</div>
                <div className="pl-4">
                  <AiFillPlayCircle size={34} color="#6b48ff" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Meter Specify */}
        <div className="px-4 mt-20 w-[90%] mx-auto md:w-[90%]  ">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Spiral Smart Meter
            </div>
            <div className="pt-2">Meter specifications</div>
          </div>
          <div className="grid grid-cols-1 w-[100%] md:w-[90%] lg-[90%] md:grid-cols-2 lg:grid-cols-2 mx-auto gap-10 ">
            <div className="w-full h-[500px] border bg-white rounded-lg mt-10">
              <img src="" className="" />
            </div>
            <div className="grid grid-cols-2 gap-10 place-items-centet place-content-center">
              {specData.map((i) => (
                <div className="" key={i.id}>
                  <div className="italic font-Kanit font-semibold text-[19px] text-start md:text-center lg:text-center">
                    {i.title}
                  </div>
                  <div className="text-start md:text-center lg:text-center font-light text-gray-700">
                    {i.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* talk */}
        <div className=" hidden grid-cols-1">
          <div className="w-100 flex items-center justify-center">
            <div className="talk-cover h-[300px] rounded-full border"></div>
          </div>
        </div>

        <div className="hidden grid-cols-1 ">
          <div className="grid grid-cols-3 grid-rows-3 border h-[400px]">
            <div className=" bg-green-300 col-span-1 row-span-2 "></div>
            <div className=" bg-red-300 cols-span-3 row-span-2"></div>
            <div className=" bg-gray-300 cols-span-3"></div>
          </div>
          <div className=""></div>
        </div>

        <div className="mt-[100px]">
          <div className="flex flex-col items-center justify-center mb-10">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Meter features
            </div>
            <div className="pt-2">Some features of the spiral meters</div>
          </div>

          <div className="flex items-start justify-content-center flex-col w-[100%] lg:w-[90%] mx-auto relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center content-center gap-10 place-items-center place-content-center">
              {featuresData.map(({ id, title, icon, desc }) => (
                <div
                  className="w-[90%] bg-white drop-shadow rounded-lg p-4 border-b-[4px] border-secondary"
                  key={id}
                >
                  <div className="w-[70px] h-[70px] flex items-center justify-center">
                    {icon}
                  </div>
                  <div className="italic font-Kanit font-semibold text-[19px] mt-4">
                    {title}
                  </div>
                  <div className="font-light text-gray-700">{desc}</div>
                </div>
              ))}
            </div>
            <div className="w-[100%] flex items-center justify-center ">
              <Link
                to="/features"
                className="flex items-center justify-center my-6 py-3 rounded-md w-[90%] cursor-pointer "
              >
                <div className="text-gray-700 font-semibold underline">
                  See all
                </div>
                <div className="pl-3">
                  <BsArrowRightShort className="text-gray-700" size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[80px] grid grid-cols-1 place-items-center ">
          <div className="w-[90%] h-[500px] bg-white border rounded-md "></div>
          <div className="flex flex-col items-center justify-center mb-10 mt-20 w-[90%]">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit text-start">
              Gain full control
            </div>
            <div className="pt-2 text-start font-">
              A mordern approach to energy efficiency.
            </div>
            <div className="pt-2 text-center text-[17px] text-gray-700 font-light md:w-[70%] mx-auto lg:w-[70%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type .
            </div>
          </div>
        </div>

        <div className="h-auto">
          <div className="bg-gradient-to-br from-[#281a39] to-[#1d0d43] px-3 h-[300px] flex items-center justify-center">
            <div className="flex flex-col items-center justify-center mb-10 w-[90%]">
              <div className="text-3xl font-semibold mx-2 text-white font-Kanit text-start">
                Our Meters in Services.
              </div>
              <div className="pt-2 text-center font-light text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
              </div>
            </div>
          </div>
          <div className="w-[90%] md:w-[80%] lg:w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-content-center relative top-[-50px] place-items-center ">
            {/* service */}
            <CountCard title={"Meters in Service"} value={"1003"} />
            {/* mini/macro grid */}
            <CountCard title={"Mini/Macro grid Meters"} value={"281"} />
            {/* users grid */}
            <CountCard title={"Users Meters"} value={"493"} />
            {/* customers grid */}
            <CountCard title={"Custom Meter"} value={"304"} />
          </div>
        </div>
        {/* Spiral Meter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto  mt-20 gap-10">
          <div className="w-[90%] flex-col flex justify-center ">
            <div className="font-light text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>{" "}
            <div className="font-Kanit text-3xl font-semibold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
            <div className="pt-3 font-light text-gray-700">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
            </div>
          </div>
          <div className="video-responsive w-full">
            <iframe
              style={{}}
              height="500"
              src={`https://www.youtube.com/embed/rokGy0huYEA`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Embedded youtube"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Landing;
