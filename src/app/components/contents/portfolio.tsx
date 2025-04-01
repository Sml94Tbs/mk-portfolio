"use client";

import { useEffect } from "react";
import CardProjet from "../cardProjet";

const Portfolio = () => {
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
    }, []);
  return (
    <section className=" bg-[#2C3E50]">
      <div className=" text-center">
        <h1 className=" text-white text-[4.5rem] font-[700] leading-[1.2] wsh2 mb-[5rem]">
          Mes Réalisation Professionnelles
        </h1>
        <h3 className=" wsh text-white text-[1.6rem] mb-[5rem]">
          Retrouver tout les projets que j'ai pu réaliser
        </h3>
      </div>
      <div className=" wsh grid grid-cols-[repeat(2,_1fr)] items-center gap-[2.5rem] max-sm:grid-cols-[1fr]">
        <div className=" wsh3 "><CardProjet titre="A l'école" image="/images/vn.jpg" link="school"/></div>
        <div className=" wsh3 "><CardProjet titre="En entreprise" link="/entreprise" image="/images/work.png" /></div>
      </div>
    </section>
  );
};

export default Portfolio;
