import Layout from "../../components/Layout";
import "./style.css";
import { v4 as uuidv4 } from "uuid";
import { sectionData } from "./data";
import { useEffect } from "react";
import { AiFillPlayCircle } from "react-icons/ai";
const Sections = () => {
  useEffect(() => {
    // window.scroll({
    //   top: 0,
    //   behavior: "smooth",
    // });
    return () => {};
  }, []);
  return (
    <div className="">
      <Layout>
        <div className="pb-[200px]">
          <div className="sections-bg ">
            <div className="px-6 pt-[200px] h-[auto] pb-[200px] w-full md:w-[70%] mx-auto lg-[70%]  ">
              <div className="uppercase text-start md:text-center lg:text-center text-white pb-3 text-[15px] font-light">
                Spiral energy
                <span className="text-secondary font-semibold">customers</span>
              </div>
              <div className="font-Kanit text-white md:text-center lg:text-center text-5xl text-start">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </div>
              <div className="text-1xl pt-2 font-light text-white text-start md:text-center lg:text-center">
                Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum is{" "}
                <br />
                simply dummy text of the printing
              </div>
              <div className="flex mt-6 items-center justify-between w-full mx-auto md:w-[70%] lg:w-[60%] p-1 rounded-full bg-white">
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
          </div>
          <div className="flex flex-col items-center justify-center my-10">
            <div className="text-3xl font-semibold mx-2 text-zinc-800 font-Kanit">
              Customer base
            </div>
            <div className="pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-[90%] mx-auto mt-20 gap-20">
            {sectionData.map(({ id, title, img, desc }) => (
              <div className="" key={uuidv4()}>
                <div className="w-100 h-[300px] border bg-white"></div>
                <div className="">
                  <div className="font-Kanit text-2xl text-gray-800 mt-3">
                    {title}
                  </div>
                  <div
                    className="text-gray-700 font-light mt-2"
                    dangerouslySetInnerHTML={{ __html: desc }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center mt-[100px] w-[100%] mx-auto md:w-[90%]">
            <div className="w-[90%] rounded-lg section-l_bg p-4 h-[400px] flex item-center flex-col justify-center">
              <div className="font-Kanit text-start md:text-center lg:text-center font-semibold text-white text-4xl ">
                Lorem Ipsum is simply dummy text of the printing and
              </div>
              <div className="text-white pt-3 text-start md:text-center lg:text-center mx-auto w-[100%] md:w-[80%]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown. Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown
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
        </div>
      </Layout>
    </div>
  );
};

export default Sections;
