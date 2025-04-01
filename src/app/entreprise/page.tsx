"use client";
import Projets from "@/app/components/template/projet";
import {
  projetEntrepriseDeuxiemeAnnee,
  projetEntreprisePremiereAnnee,
} from "@/app/data/projet";
import { useState } from "react";

const Entreprise = () => {
  const sections = [
    {
      titreSection: "Projet réalisés en 1ère Année",
      projets: projetEntreprisePremiereAnnee,
    },
    {
      titreSection: "Projet réalisés en 2ème Année",
      projets: projetEntrepriseDeuxiemeAnnee,
    },
  ];
  const [annee, setAnnee] = useState(1); // 1 pour la première année, 2 pour la deuxième année
  const projet =
    annee === 1 ? projetEntreprisePremiereAnnee : projetEntrepriseDeuxiemeAnnee;
  return (
    <section className="bg-[#2C3E50] text-white">
      <h1 className="text-[4.5rem] font-bold text-center mb-6">
      Réalisation professionnelles en entreprise
      </h1>
      <Projets sections={sections} />
    </section>
  );
};

export default Entreprise;
