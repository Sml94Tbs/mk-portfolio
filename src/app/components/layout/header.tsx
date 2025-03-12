"use client";
import Navbar from "@/app/components/nav";
import NavbarResp from "@/app/components/resp.nav";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const navRef = useRef(null);

  const toogleNavbar = () => {
    console.log("Ca marche");
    setIsClick(!isClick);
  };

  const links = [
    { href: "/#accueil", name: "Accueil" },
    { href: "/#about", name: "À propos" },
    { href: "/#skills", name: "Compétences" },
    { href: "/#portfolio", name: "Portfolio" },
    { href: "/#contact", name: "Contact" },
  ];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (navRef.current && !(navRef.current as HTMLElement).contains(event.target as Node)) {
      setIsClick(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-[101] backdrop-blur-[16px] max-lg:p-[2rem_3%]">
      <Link
        href={"/"}
        className=" animate-slideRight text-[2.5rem] no-underline opacity-0 text-black font-[600] cursor-default max-lg:opacity-100 max-lg:animate-none"
      >
        MK
      </Link>
      <button
        className=" hidden max-lg:block text-[3.2rem] text-black"
        onClick={toogleNavbar}
      >
        {isClick ? <IoIosClose /> : <IoIosMenu />}
      </button>
      {isClick && <div ref={navRef}><NavbarResp setIsClick={setIsClick} links={links} /></div>}
      <Navbar links={links} />
    </header>
  );
};

export default Header;
