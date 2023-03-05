import Layout from "../../../components/Layout";
import { IoMdArrowBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import moment from "moment";
const BlogDetails = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
    return () => {};
  }, []);

  return (
    <Layout>
      <div className="grid grid-cols-1 w-[90%] md:w-[60%] lg:w-[500px] mx-auto place-items-center place-content-center">
        <div className="pt-[100px] pb-[100px]">
          <div
            className="flex items-center underline my-4 w-[fit-content] p-2 cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <div className="">
              <IoMdArrowBack color={"#6b48ff"} />
            </div>
            <div className="text-secondary underline">Go to Blog</div>
          </div>
          <div className="font-kanit font-bold text-2xl">
            Lorem Ipsum is simply dummy text of the printing
          </div>
          <div
            className="w-[100%] h-[300px] my-6"
            style={{
              background: `url("https://media.istockphoto.com/id/1368780337/photo/specialist-technician-professional-engineer-with-laptop-and-tablet-maintenance-checking.jpg?b=1&s=170667a&w=0&k=20&c=NX_UXw2Ju6GxF2ao5Jwr-qxab-hxw4X5phHjWjmx2yw=")`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>
          <div className="text-gray-800 font-light">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard
            <br />
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="font-semibold font-gray-700">Admin</div>
            <div className="font-light italic font-gray-700 text-[14px]">
              {moment(Date.now()).format("lll")}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogDetails;
