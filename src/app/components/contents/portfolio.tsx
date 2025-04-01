import CardProjet from "../cardProjet";

const Portfolio = () => {
  return (
    <section className=" bg-[#2C3E50]">
      <div className=" text-center">
        <h1 className=" text-white text-[4.5rem] font-[700] leading-[1.2] mb-[5rem]">
          Mes Réalisation Professionnelles
        </h1>
        <h3 className=" text-white text-[1.6rem] mb-[5rem]">
          Retrouver tout les traveaux que j'ai pu réalisé
        </h3>
      </div>
      <div className=" grid grid-cols-[repeat(2,_1fr)] items-center gap-[2.5rem] max-sm:grid-cols-[1fr]">
        <CardProjet titre="A l'école" image="/images/vn.jpg" link="school" />
        <CardProjet titre="En entreprise" link="/entreprise" image="/images/work.png" />
      </div>
    </section>
  );
};

export default Portfolio;
