import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
// import Logo from "../../assets/images/logo.jpg";
const Navbar = () => {
  let location = useLocation();
  const pathname = location.pathname;
  const [showNav, setshowNav] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 30) {
        setshowNav(true);
      } else {
        setshowNav(false);
      }
    });
    return () => {};
  }, []);
  return (
    // animate__animated animate__fadeIn
    <div
      className={
        showNav
          ? `w-full px-3 py-5 fixed navbar z-50 bg-white drop-shadow-lg`
          : `w-full px-3 py-5 fixed navbar z-50 `
      }
      // className={"w-full px-3 py-5 fixed navbar z-50 bg-white drop-shadow-md"}
    >
      {modal && <Modal closeModal={setmodal} />}
      <div className="w-[95%] mx-auto flex flex-row items-center justify-between ">
        <Link to="/" className="flex flex-row items-center justify-start">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden items-center justify-center border-[1px] border-secondary"></div>
          <div
            className={
              pathname == "/services" && !showNav
                ? `brand text-[23px] font-semibold mx-2 text-white font-Kanit`
                : pathname == "/services" && showNav
                ? `brand text-[23px] font-semibold mx-2 text-zinc-800 font-Kanit`
                : `brand text-[23px] font-semibold mx-2 text-zinc-800 font-Kanit`
            }
          >
            Spiral Energy
          </div>
        </Link>
        <div className="flex flex-row items-center ">
          <div className="hidden md:hidden lg:flex items-center">
            <Link
              className={
                pathname == "/services" && !showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-white hover:text-primary transition-all p-2"
                  : pathname == "/services" && !showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
                  : "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              }
              to="/"
            >
              Home
            </Link>
            <Link
              className={
                pathname == "/services" && !showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-white hover:text-primary transition-all p-2"
                  : pathname == "/services" && showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
                  : "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              }
              to="/features"
            >
              Features
            </Link>
            <Link
              className={
                pathname == "/services" && !showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-white hover:text-primary transition-all p-2"
                  : pathname == "/services" && showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
                  : "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              }
              to="/services"
            >
              Our customers
            </Link>
            <Link
              className={
                pathname == "/services" && !showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-white hover:text-primary transition-all p-2"
                  : pathname == "/services" && showNav
                  ? "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
                  : "cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              }
              to="/blog"
            >
              Newsroom
            </Link>
            <Link
              className=" hidden cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:text-primary transition-all p-2"
              to="/"
            >
              Contact Us
            </Link>
          </div>

          <div className="flex items-center">
            <a
              href="https://spiralenergy.vercel.app/login"
              className={
                pathname == "/services" && !showNav
                  ? "hidden md:block lg:block border-[1px] border-white text-light px-4 py-2 text-white rounded-md cursor-pointer"
                  : "hidden md:block lg:block border-[1px] border-gray-700 text-light px-4 py-2 rounded-md cursor-pointer"
              }
            >
              Login
            </a>
            <a
              href="https://spiralenergy.vercel.app/createaccount"
              target={"_blank"}
              className={
                "bg-gray-900 text-white ml-4 px-4 py-2 rounded-md border-[1px] border-gray-700 cursor-pointer"
              }
            >
              Get Started
            </a>
          </div>
          <div className="lg:hidden ml-2" onClick={() => setmodal(true)}>
            <AiOutlineMenu
              size={30}
              color={
                pathname == "/service" && showNav
                  ? "#000"
                  : pathname == "/services" && !showNav
                  ? "#fff"
                  : "#000"
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
