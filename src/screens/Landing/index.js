import Layout from "../../components/Layout";
import { BsArrowRightShort } from "react-icons/bs";
import { featuresData, recData, serviceData, specData } from "./data";
import "./style.css";
import { Link } from "react-router-dom";

const Landing = ({}) => {
  return (
    <Layout>
      <div className="pb-[600px]">
        {/* hero */}
        <div className="h-auto pt-20 pb-20 w-100 grid grid-cols-1 p-3  bg-gradient-to-tr from-[#e0c3fc40]  to-[#8ec5fc34]">
          <div className="w-100 rounded-lg pt-[50px] p-5">
            <div className="uppercase text-gray-800 pb-3 text-[15px] font-light">
              Lorem Ipsum is simply...
            </div>
            <div className="text-left font-Kanit font-semibold text-[40px] leading-[55px] text-gray-800">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
            <div className="mt-10">
              <Link
                to="/dashboard"
                className="border-[2px] w-100 block drop-shadow-md font-semibold cursor-pointer border-gray-200 px-3 py-3 rounded-[30px] text-center bg-gradient-to-r from-[#110613] to-[#1e191f] text-white"
              >
                Get Started
              </Link>
              <div className="mt-4 border-[2px] drop-shadow-sm bg-white font-normal cursor-pointer border-gray-200 px-3 py-3 rounded-[30px] text-center text-gray-800">
                Contact Sales
              </div>
            </div>
          </div>
          <div className="mt-4">
            <div className="w-100 h-[600px] border-[1px] border-gray-300 bg-white rounded-lg "></div>
          </div>
        </div>
        {/* review from workers */}
        <div className="px-5">
          {recData.map((i) => (
            <div
              key={i.id}
              className="bg-gradient-to-r mt-20 from-[#0094e924]  to-[#80d0c735] rounded-md p-4"
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

        <div className="flex items-center justify-center mt-[200px]">
          <div className="w-[90%] rounded-lg section-l_bg p-4 h-[400px] flex item-center flex-col justify-center">
            <div className="font-Kanit font-semibold text-white text-4xl text-start">
              Lorem Ipsum is simply dummy text of the printing and
            </div>
            <div className="text-white text-start pt-3">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown
            </div>
          </div>
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
        <div className="test py-6 mt-80">
          <div className="flex flex-col items-center justify-center">
            <div className=" text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Who we serve
            </div>
            <div className="">
              Lorem Ipsum is simply dummy text of the printing
            </div>
          </div>
          <div className="px-5 w-100 mt-10 flex items-start">
            <div className="w-[10px] hidden rounded-full h-[1400px] bg-secondary bg-gradient-to-r from-secondary to-[#cc31f701] "></div>
            <div className="grid grid-col-1">
              {serviceData.map((i) => (
                <div className="p-3 mt-10" key={i.id}>
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
                  <div className="font-semibold text-2xl mt-3 ">{i.title}</div>
                  <hr className="w-[20%] border-[2px] border-secondary rounded-lg" />
                  <div className="font-light text-gray-700 text-[17px] pt-3">
                    {i.desc}
                  </div>
                  <div className="bg-gray-50 w-[fit-content] flex mt-5 px-3 py-2 rounded-lg ">
                    <div className="font-light text-[15px] pr-2">Read more</div>
                    <div className="h-100 flex items-center justify-center pt-[1px]">
                      <BsArrowRightShort size={22} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Meter Specify */}
        <div className="px-4 mt-20">
          <div className="flex flex-col items-center justify-center">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Spiral Smart Meter
            </div>
            <div className="pt-2">Meter specifications</div>
          </div>
          <div className="grid grid-cols-1 ">
            <div className="w-100 h-[500px] border bg-white rounded-lg mt-10">
              <img src="" className="" />
            </div>
            <div className="grid grid-cols-2">
              {specData.map((i) => (
                <div className="my-4" key={i.id}>
                  <div className="italic font-Kanit font-semibold text-[19px]">
                    {i.title}
                  </div>
                  <div className="">{i.value}</div>
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

          <div className="flex items-start justify-content-center flex-col w-[100%] relative">
            <div className="grid grid-cols-1 items-center content-center gap-10 place-items-center  place-content-center">
              {featuresData.map(({ id, title, icon, desc }) => (
                <div
                  className="w-[90%] bg-white drop-shadow rounded-sm p-4"
                  key={id}
                >
                  <div className="w-[50px] h-[50px] border "></div>
                  <div className="italic font-Kanit font-semibold text-[19px] mt-4">
                    {title}
                  </div>
                  <div className="font-light text-gray-700">{desc}</div>
                </div>
              ))}
            </div>
            <div className="w-[100%] flex items-center justify-center ">
              <Link className="flex items-center justify-center border my-6 py-3 rounded-md w-[90%] ">
                <div className="text-gray-700">See all</div>
                <div className="pl-3">
                  <BsArrowRightShort className="text-gray-700" size={20} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[100px] grid grid-cols-1 place-items-center ">
          <div className="w-[90%] h-[600px] bg-white border rounded-md "></div>
          <div className="flex flex-col items-center justify-center mb-10 mt-40 w-[90%]">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit text-start">
              Gain full control
            </div>
            <div className="pt-2 text-start">
              A mordern approach to energy efficiency.
            </div>
            <div className="pt-2 text-start">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type .
            </div>
          </div>
        </div>
        {/* Spiral Meter */}
      </div>
    </Layout>
  );
};

export default Landing;
