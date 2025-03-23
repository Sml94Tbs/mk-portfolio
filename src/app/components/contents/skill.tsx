"use client";
import ListSKill from "@/app/components/list.skill";
import { useEffect } from "react";
const Skill = () => {
  const skill = [
    {
      titre: "Réseaux",
      skill: "Cisco IOS, VLAN, OSPF, STP, Wi-Fi",
    },
    {
      titre: "Administration Systèmes",
      skill: "Cisco IOS, VLAN, OSPF, STP, Wi-Fi",
    },
    {
      titre: "Virtualisation",
      skill: "VMware, VirtualBox, Hyper-V",
    },
    {
      titre: "Sécurité Informatique",
      skill: "Pare-feu, VPN, IDS/IPS",
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

        ScrollReveal().reveal(".heanding", { origin: "top" });
        ScrollReveal().reveal(".", { origin: "left" });
        ScrollReveal().reveal(".", { origin: "right" });
        ScrollReveal().reveal(".skill", { origin: "bottom" });
      });
    }
  }, []);
  return (
    <section className="bg-[#2C3E50]">
      <h1 className="heanding text-[4.5rem] font-[700] leading-[1.2] mb-[5rem] text-center text-white">
        Mes Compétences Techniques
      </h1>
      <div className="skill h-screen">
        <ListSKill skills={skill} />
      </div>
    </section>
  );
};

export default Skill;
