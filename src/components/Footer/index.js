import { AiFillMail, AiFillPhone } from "react-icons/ai";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="w-full px-8 py-6 lg:p-16 bg-zinc-900">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="">
          <div className="">
            <div className=""></div>
            <div className="font-bold text-zinc-100 text-2xl">
              Spiral Energy
            </div>
          </div>
          <div className="">
            <div className="font-normal text-zinc-100 text-sm pt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has
            </div>
          </div>
          <div className="">
            <div className="flex mt-4">
              <Link
                to={{
                  pathname: "/",
                  target: "_blank",
                }}
                className="px-2 m-2 d-inline"
              >
                <BsFacebook color="white" />
              </Link>
              <Link className="px-2 m-2 d-inline">
                <BsTwitter color="white" />
              </Link>
              <Link className="px-2 m-2 d-inline">
                <BsInstagram color="white" />
              </Link>
              <Link className="px-2 m-2 d-inline">
                <BsLinkedin color="white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="">
          <div className="font-bold text-zinc-100 text-md pt-2">Quick link</div>
          <div>
            <Link
              to="/"
              className="py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Home
            </Link>
            <Link
              to="/services"
              className=" py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Services
            </Link>
            <Link
              to="/blog"
              className="  py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Blogs
            </Link>
            <Link
              to="/features"
              className="  py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Features
            </Link>
          </div>
        </div>
        <div className="">
          <div className="font-bold text-zinc-100 text-md pt-2">Policies</div>
          <div>
            <Link
              to="/"
              className="py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Useage Policy
            </Link>
            <Link
              to="/services"
              className=" hidden py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Privacy policy
            </Link>
            <Link
              to="/sectors"
              className=" hidden py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              Blogs
            </Link>
          </div>
        </div>
        <div className="">
          <div className="font-bold text-zinc-100 text-md pt-2">Contact</div>
          <div>
            <Link
              to="/"
              className="py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              info@spiralenergy.com
            </Link>
            <Link
              to="/services"
              className=" py-1 cursor-pointer pr-8  pr mt-2 block font-light text-sm text-zinc-100"
            >
              +2340809384989
            </Link>
          </div>
        </div>
      </div>
      <div className="h-[1px] rounded-lg w-full bg-zinc-300 mt-2"></div>
      <div className="text-sm text-zinc-100 font-light text-center pt-4">
        <span className="font-bold text-zinc-100">Spiral Energy</span>{" "}
      </div>
    </div>
  );
};

export default Footer;
