"use client"
import { useEffect } from "react";
import ListCard from "@/app/components/veille.componenets/listCard.veille";

const Veille = () => {
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
        <section className="bg-[#2C3E50]">
            <div className=" text-white text-center">
            <h1 className=" text-[4.5rem] max-lg:text-[3.2rem] font-bold">
                Ma veille technologique
            </h1>
            <p>
                Sujet de la veille : 
            </p>
            </div>
            <ListCard/>
        </section>
    )
}

export default Veille;