"use client";
import ListCard from "@/app/components/veille.componenets/listCard.veille";
import ButtonVeille from "@/app/components/veille.componenets/button.veille";
import { useEffect, useRef } from "react";
import { FaRegArrowAltCircleUp } from "react-icons/fa";
import ButtonHome from "../button.home";
const Veille = () => {
  const el = useRef(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("scrollreveal").then((module) => {
        const ScrollReveal = module.default;
        ScrollReveal({
          reset: true,
          distance: "80px",
          duration: 2000,
          delay: 200,
        });

        ScrollReveal().reveal(".heading", { origin: "top" });
        ScrollReveal().reveal(".wsh", { origin: "left" });
        ScrollReveal().reveal(".wsh2", { origin: "right" });
        ScrollReveal().reveal(".wsh3", { origin: "bottom" });
      });
    }
    import("typed.js").then((module) => {
      const Typed = module.default;
      const typed = new Typed(el.current, {
        strings: ["IPv6, SDN, SD-WAN", "Virtualisation et Cloud Computing"],
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
  }, []);
  return (
    <section className="bg-[#2C3E50]">
      <div className=" text-white text-center">
        <h1 className=" text-[4.5rem] max-lg:text-[3.2rem] font-bold">
          Ma veille technologique
        </h1>
        <div className="  text-[2rem] max-lg:text-[1.5rem] m-7">
          <p>Sujet de la veille :</p>
          <span ref={el} />
        </div>
        <div className=" flex h-[50vh] items-center justify-center">
          <ButtonVeille link="veille" icon={<FaRegArrowAltCircleUp/>} reseau="Voir plus"/>
        </div>
      </div>
    </section>
  );
};

export default Veille;
