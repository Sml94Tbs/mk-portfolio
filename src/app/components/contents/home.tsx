"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { FaLinkedin } from "react-icons/fa";
import Typed from "typed.js";

const Accueil = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Bienvenue sur mon portfolio", "Bienvenue sur mon portfolio"],
      startDelay: 300,
      typeSpeed: 50,
      backSpeed: 50,
      backDelay: 150,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });
  return (
    <section className=" relative w-full h-screen flex justify-center items-center p-[70px_10%_0] flex-col">
      <h1 className=" text-[3.2rem]  font-[700]">Marnick SAKALA</h1>
      <h3>ÉTUDIANT EN BTS SIO - OPTION SISR</h3>
      <span ref={el} className=" transition-[cubic-bezier(0.25_0.1_0.25_1.0)]"/>
      <div>
        <Link target="_blank" href={"/"} className=" text-[#000]">
        <FaLinkedin />
        </Link>
      </div>
    </section>
  );
};

export default Accueil;
