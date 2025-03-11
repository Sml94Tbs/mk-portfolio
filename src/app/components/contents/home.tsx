"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Accueil = () => {
  const el = useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Développeur", "Étudiant"],
      startDelay: 300,
      typeSpeed: 150,
      backSpeed: 150,
      backDelay: 1000,
      smartBackspace: true,
      showCursor: true,
      loop: true,
    });
    return () => {
      typed.destroy();
    };
  });
  return (
    <section className=" relative w-full h-screen flex justify-center items-center p-[70px_10%_0]">
      <div className="">
        <h1 className=" text-[3.2rem]  font-[700]">Marnick SAKALA</h1>
        <h3 className=" text-[3.2rem]  font-[700]">
          ÉTUDIANT EN BTS SIO - OPTION SISR
        </h3>
        <h3 className=" text-[2.4rem] font-[600]"><span ref={el} /> </h3>
      </div>
    </section>
  );
};

export default Accueil;
