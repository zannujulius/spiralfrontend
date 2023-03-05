import moment from "moment";
import { Link } from "react-router-dom";

const BlogCard = ({}) => {
  return (
    <div className="rounded-md border pb-3 overflow-hidden bg-white">
      <div
        className="h-[300px] relative "
        style={{
          background: `url("https://media.istockphoto.com/id/1368780337/photo/specialist-technician-professional-engineer-with-laptop-and-tablet-maintenance-checking.jpg?b=1&s=170667a&w=0&k=20&c=NX_UXw2Ju6GxF2ao5Jwr-qxab-hxw4X5phHjWjmx2yw=")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div
          className="w-[60px] h-[60px] rounded-full border-[1px] drop-shadow-md bg-white border-white absolute bottom-[-30px] left-[40%]"
          style={{
            background: `url("https://images.unsplash.com/photo-1457449940276-e8deed18bfff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div className="px-2 mt-10">
        <div className="">
          <div className="font-Kanit text-[18px] font-semibold text-gray-800">
            New release of smart meters...
          </div>
          <div className="font-light font-gray-700 text-[15px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard...
          </div>
        </div>
        <div className="flex items-center justify-between mt-2">
          <div className="font-semibold font-gray-700">Admin</div>
          <div className="font-light italic font-gray-700 text-[14px]">
            {moment(Date.now()).format("lll")}
          </div>
        </div>
        <div className="mt-4">
          <Link
            className="bg-zinc-900 text-white font-light rounded-md px-3 py-2 text-[14px]"
            to={"/blog/896578"}
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
