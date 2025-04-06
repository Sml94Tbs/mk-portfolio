import Image from "next/image";
import Link from "next/link";

const CardProjet = ({ titre, link, image }: { titre: string; link: string, image : string }) => {
  return (
    <Link href={link}>
    <div className=" flex flex-col overflow-hidden rounded-[2rem] border border-solid transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:scale-[1.02]">
      <Image src={image} width={1079} height={1919} alt="Realisation" className="w-full" />
      <div className=" p-[2rem]">
        <h4 className=" text-white text-[2.5rem] font-[600]">{titre}</h4>
      </div>
    </div>
    </Link>
  );
};

export default CardProjet;
