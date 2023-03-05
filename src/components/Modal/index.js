import "./style.css";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Modal = ({ closeModal }) => {
  return (
    <div className="modal-nav drop-shadow-lg" onClick={() => closeModal(false)}>
      <div
        className="modal-container bg-white px-4 pt-4 pb-10"
        onClick={() => closeModal(false)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden items-center justify-center border-[1px] border-secondary"></div>
            <Link
              to={"/"}
              className="font-semibold text-2xl text-zinc-900 font-Kanit pt-1"
              style={{
                color: "",
              }}
            >
              Spiral Energy
            </Link>
          </div>
          <div className="cursor-pointer" onClick={() => closeModal(false)}>
            <IoMdClose size={28} color={""} />
          </div>
        </div>
        <div className="">
          <Link to="/" className="pr-5 block py-2 my-3">
            Home
          </Link>
          <Link to="/features" className="pr-5 block py-2 my-3">
            Features
          </Link>
          <Link to="/services" className="pr-5 block py-2 my-3">
            Our customers
          </Link>
          <Link to="/blog" className="pr-5 block py-2 my-3">
            Blog
          </Link>
          <Link to="/sectors" className="pr-5 hidden py-2 my-3">
            Contact
          </Link>
        </div>
        <div className="flex items-center">
          <div
            className={
              "border-[1px] mr-4 border-gray-700 text-light px-4 py-2 rounded-md cursor-pointer"
            }
          >
            Login
          </div>
          <a
            href="https://spiralenergy.vercel.app/createaccount"
            target={"_blank"}
            className={
              "bg-gray-900 text-white w-[fit-content] px-4 py-2 rounded-md border-[1px] border-gray-700 cursor-pointer"
            }
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Modal;
