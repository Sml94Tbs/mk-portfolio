"use client";

import { useEffect } from "react";
import Timeline from "../timeline";

const About = () => {
  const timeline = [
    {
      titre: "BTS SIO option SISR",
      date: "septembre 2022",
      lieu: "Lycée Frédéric Mistral",
    },
    {
      titre: "Bac Professionel Systèmes Numériques",
      date: "Juillet 2022",
      lieu: "Lycée Frédéric Mistral",
    },
    {
      titre: "Diplôme National du Brevet",
      date: "Juillet 2019",
      lieu: "Collège Françine Fromond",
    },
  ];

  const pro = [
    {
      titre: "OFFICE NATIONAL DES FORÊTS",
      date: "Décembre 2022",
      lieu: "Maisons-Alfort",
    },
    {
      titre: "OFFICE NATIONAL DES FORÊTS (Stage)",
      date: "Novembre 2021 à Février 2022",
      lieu: "Paris",
    },
    {
      titre: "CASH EXPRESS",
      date: "Janvier 2021 à Avril 2021",
      lieu: "Fresnes",
    },
  ];
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
        ScrollReveal().reveal(".about-contenu, .wsh2", { origin: "right" });
      });
    }
  }, []);
  return (
    <section className=" bg-[#2C3E50]">
      <div className=" relative left-0">
        <h1 className=" text-white text-[7rem] font-[700] heading max-lg:text-[4.5rem]">
          A propos de moi
        </h1>
      </div>
      <div className=" text-white text-center m-[2rem_0_3rem] text-[1.6rem] p-5 about-contenu">
        <p>
          Je suis SAKALA Marnick, étudiant en BTS Services Informatiques aux
          Organisations (SIO){" "}
        </p>
        <p>En Solutions d’Infrastructure, Systèmes et Réseaux (SISR)</p>
      </div>
      <div className=" flex justify-center items-center ">
        <div className="flex gap-x-[8rem] max-md:flex-col">
          <div className=" relative wsh">
            <h2 className=" text-[2.5rem] font-[700] text-white mb-[2rem] ">
              Parcours scolaire
            </h2>
            <Timeline abouts={timeline} />
          </div>
          <div className=" relative wsh">
            <h2 className=" text-[2.5rem] font-[700] text-white mb-[2rem] ">
              Expériences Professionnelles
            </h2>
            <Timeline abouts={pro} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
