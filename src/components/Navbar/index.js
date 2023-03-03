import { Link, useLocation } from "react-router-dom";
import "./style.css";
import { AiOutlineMenu } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import Modal from "../Modal";
// import Logo from "../../assets/images/logo.jpg";
const Navbar = () => {
  let location = useLocation();
  const [showNav, setshowNav] = useState(false);
  const [modal, setmodal] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(e, "///");
    });
    return () => {};
  }, []);
  return (
    <div
      className={`w-full px-3 py-5 fixed navbar z-50 `}
      // className={"w-full px-3 py-5 fixed navbar z-50 bg-white drop-shadow-md"}
    >
      {modal && <Modal closeModal={setmodal} />}
      <div className="w-[95%] mx-auto flex flex-row items-center justify-between">
        <Link to="/" className="flex flex-row items-center justify-start">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden items-center justify-center border-[1px] border-secondary"></div>
          <div className="brand text-[23px] font-semibold mx-2 text-zinc-800 font-Kanit">
            Spiral Energy
          </div>
        </Link>
        <div className="flex flex-row items-center ">
          <div className="hidden md:flex items-center">
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/"
            >
              Home
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/services"
            >
              Services
            </Link>
            <Link
              className="cursor-pointer mr-16 text-[15px] font-normal text-zinc-800 hover:text-primary transition-all p-2"
              to="/sectors"
            >
              Sectors
            </Link>
            <Link
              className=" hidden cursor-pointer mr-16 text-[15px] font-light text-zinc-800 hover:text-primary transition-all p-2"
              to="/"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:hidden md:hidden" onClick={() => setmodal(true)}>
            <AiOutlineMenu size={30} color={""} />
          </div>
          <div className="flex-row items-center hidden">
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              EN
            </div>
            <div className="text-zinc-800 font-extralight text-1xl px-1">|</div>
            <div className="text-zinc-800 font-extralight text-1xl px-1 cursor-pointer">
              GR 🇩🇪
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
