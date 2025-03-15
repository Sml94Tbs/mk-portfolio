"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import Icon from "../icon";

const Footer = () => {
  return (
    <footer className=" bg-[#2C3E50]">
      <div className=" w-full">
        <h3 className=" text-white text-[1.5rem] p-5">
          Contact Professionnel :
        </h3>
        <div className=" flex justify-center gap-5 text-white text-[2rem] p-[2.8rem]">
          <Icon icon={<IoMail />} />
          <Icon icon={<FaLinkedin />} />
          <Icon icon={<FaGithub />} />
        </div>
        <p className=" text-center text-white text-[1.4rem]">@COPYRIGHT MK | All Right Reserved - EFREI Paris.</p>
      </div>
    </footer>
  );
};

export default Footer;
