import CardVeille from "@/app/components/veille.componenets/card.veille";
import { googleAlerts } from "@/app/data/googleAlerts";
import { useState } from "react";
const ListCard = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    keyof typeof googleAlerts | "all"
  >("all");

  const allAlerts = Object.keys(googleAlerts) as (keyof typeof googleAlerts)[];

  const filteredAlerts =
    selectedCategory === "all"
      ? Object.values(googleAlerts).flat()
      : googleAlerts[selectedCategory] || [];

  return (
    <div className=" p-4 text-white">
      {/* Button de sélection */}
      <div className="flex justify-center flex-wrap gap-4 mb-6">
        <button
          className={`px-4 py-2 rounded-full border ${
            selectedCategory === "all" ? "bg-white text-black" : "border-white"
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          Tous
        </button>
        {allAlerts.map((index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-full border ${
              selectedCategory === index
                ? "bg-white text-black"
                : "border-white"
            }`}
            onClick={() => setSelectedCategory(index)}
          >
            {index}
          </button>
        ))}
      </div>
      <div className="  grid grid-cols-[repeat(4,_1fr)] gap-[1.6rem] max-xl:grid-cols-[repeat(2,_1fr)] max-lg:grid-cols-[repeat(1,_1fr)]">
        {filteredAlerts.length > 0 ? (
          filteredAlerts.map((alert, index) => (
            <CardVeille
              key={index}
              title={alert.title}
              date={alert.pubDate}
              desc={alert.snippet}
              link={alert.link}
            />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-400 text-lg italic">
            Aucune alerte disponible pour cette catégorie.
          </div>
        )}
      </div>
    </div>
  );
};

export default ListCard;
