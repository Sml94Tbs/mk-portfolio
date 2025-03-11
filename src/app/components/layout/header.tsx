"use client";
import Link from "next/link";
import { useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";
import LinkHeader from "@/app/components/link.header";
import NavbarResp from "@/app/components/resp.nav";


const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const toogleNavbar = () => {
    console.log("Ca marche");
    setIsClick(!isClick);
  };

  const links = [
    { href: "/#Accueil", name: "Accueil" },
    { href: "/#about", name: "À propos" },
    { href: "/#skills", name: "Compétences" },
    { href: "/#portfolio", name: "Portfolio" },
    { href: "/#contact", name: "Contact" },
  ];

  return (
    <header className="top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-[101] backdrop-blur-[16px] max-lg:p-[2rem_3%]">
      <Link
        href={"/"}
        className="text-[25px] text-black font-[600] cursor-default"
      >
        MK
      </Link>
      <button
        className=" hidden max-lg:block text-[3.2rem] text-black"
        onClick={toogleNavbar}
      >
        {isClick ? <IoIosClose /> : <IoIosMenu />}
      </button>
      {isClick && (
        <NavbarResp links={links} />
      )}
      <nav className="inline-block max-lg:hidden ">
        <LinkHeader href="/#accueil" name="Accueil" />
        <LinkHeader href="/#about" name="A propos" />
        <LinkHeader href="/#skill" name="Compétence" />
        <LinkHeader href="/#portfolio" name="Portfolio" />
        <LinkHeader href="/#contact" name="Contact" />
      </nav>
    </header>
  );
};

export default Header;
