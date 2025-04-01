import Retour from "@/app/components/retour.button";
import { Projet, SectionProjets } from "@/app/types/project";

type ProjetsProps = {
  projets?: Projet[]; // Si on passe une liste simple (école)
  sections?: SectionProjets[]; // Si on passe des sections (entreprise)
};

const Projets = ({ projets, sections }: ProjetsProps) => {
  return (
    <div>
      {sections ? (
        sections.map((section, index) => (
          <div key={index} className="mb-10">
            <h2 className="text-3xl font-bold text-center my-6">
              {section.titreSection}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {section.projets.map((projet, i) => (
                <div key={i} className="bg-gray-700 p-4 rounded-lg shadow-lg">
                  <h3 className="text-[1.8rem] font-semibold">{projet.titre}</h3>
                  <p className="text-gray-300">{projet.date}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {(projets ?? []).map((projet, i) => (
            <div key={i} className=" bg-gray-700  p-4 shadow-lg rounded-lg">
              <h3 className=" text-[1.8rem] font-semibold">{projet.titre}</h3>
              <p className="text-gray-400">{projet.date}</p>
            </div>
          ))}
        </div>
      )}
      <div className=" flex justify-center mt-10">
        <Retour link="/#portfolio" />
      </div>
    </div>
  );
};

export default Projets;
