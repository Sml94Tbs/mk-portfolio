"use client";
import Navbar from "@/app/components/nav";
import NavbarResp from "@/app/components/resp.nav";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { IoIosClose, IoIosMenu } from "react-icons/io";

const Header = () => {
  const [isClick, setIsClick] = useState(false);
  const navRef = useRef(null);
  const [isScroll, setIsScroll] = useState(false);

  const toogleNavbar = () => {
    console.log("Ca marche");
    setIsClick(!isClick);
  };

  const links = [
    { href: "/#Accueil", name: "Accueil" },
    { href: "/#about", name: "À propos" },
    { href: "/#skills", name: "Compétences" },
    { href: "/#portfolio", name: "Projet" },
    { href: "/#contact", name: "Veille" },
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
  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("about");
      if (aboutSection) {
        const aboutTop = aboutSection.offsetTop;
        setIsScroll(window.scrollY > aboutTop);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])
  return (
    <header className={`top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-[101] backdrop-blur-[16px] max-lg:p-[2rem_3%]`}>
      <Link
        href={"/"}
        className={`animate-slideRight text-[2.5rem] no-underline opacity-0 $ font-[600] cursor-default ${isScroll ? "text-white" : "text-black"} max-lg:opacity-100 max-lg:animate-none`}
      >
        MK
      </Link>
      <button
        className={`hidden max-lg:block text-[3.2rem] ${isScroll ? "text-white" : "text-black"}`}
        onClick={toogleNavbar}
      >
        {isClick ? <IoIosClose /> : <IoIosMenu />}
      </button>
      {isClick && <div ref={navRef}><NavbarResp setIsClick={setIsClick} links={links} /></div>}
      <Navbar links={links} isScoll={isScroll} />
    </header>
  );
};

export default Header;
