"use client";

import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonHome from "../button.home";
const Accueil = () => {
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

        ScrollReveal().reveal(".acceuil-contenu", { origin: "top" });
        ScrollReveal().reveal(".acceuil-contenu h1", { origin: "left" });
        ScrollReveal().reveal(".acceuil-contenu p", { origin: "right" });
      });
    }
    import("typed.js").then((module) => {
      const Typed = module.default;
      const typed = new Typed(el.current, {
        strings: ["Développeur", "Administateur"],
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
    <section className=" relative w-full h-screen flex justify-center items-center p-[70px_10%_0]">
      <div className=" acceuil-contenu">
        <h1 className=" text-[3.2rem]  font-[700]">Marnick SAKALA</h1>
        <h3 className=" text-[3.2rem] animate-slideBottom duration-[.7s]  font-[700] ">
          ÉTUDIANT EN BTS SIO - OPTION SISR
        </h3>
        <h3 className=" text-[2.4rem] font-[600] animate-slideTop">
          <span ref={el} />{" "}
        </h3>
        <h5 className=" text-[2rem]">
          Bienvenue sur mon Portfolio Professionnel
        </h5>
        <div className=" flex gap-5 mt-[2rem] justify-center">
          <ButtonHome
            icon={<FaGithub />}
            link="https://bonjouer"
            reseau="GitHub"
          />
          <ButtonHome
            icon={<FaLinkedin />}
            link="https://bonjouer"
            reseau="Linkedin"
          />
        </div>
      </div>
    </section>
  );
};

export default Accueil;
