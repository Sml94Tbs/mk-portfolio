import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
const Footer = () => {
  return (
    <footer className=" bg-[#233344] p-[4.5rem_4.8rem_4rem_4.8rem]">
      <div className=" w-full flex">
        <div className=" flex gap-5 justify-center text-left">
        </div>
      </div>
      <div className=" flex justify-center gap-5 text-white text-[2rem] p-[2.8rem]">
        <i className="p-7 border-solid rounded-[10px] hover:bg-white hover:text-black hover:border-[#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]">
          <IoMail />
        </i>
        <i className="p-7 border-solid rounded-[10px] hover:bg-white hover:text-black hover:border-[#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]">
          <Link href={"https://www.linkedin.com/in/marnick-sakala-97017724b/"}><FaLinkedin /></Link>
        </i>
        <i className="p-7 border-solid rounded-[10px] hover:bg-white hover:text-black hover:border-[#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]">
          <Link href={"https://github.com/Minnho8"} target="_blank"><FaGithub /></Link>
        </i>
      </div>
      <p className=" text-center text-white text-[1.4rem]">
        @COPYRIGHT MK | All Right Reserved - EFREI Paris.
      </p>
    </footer>
  );
};

export default Footer;
