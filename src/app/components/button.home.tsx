import Link from "next/link";

interface ButtonHomeProps {
  icon: React.ReactNode;
  link: string;
  reseau: string;
}

const ButtonHome = ({ icon, link, reseau }: ButtonHomeProps) => {
  return (
    <Link href={link} target="_blank" className="group inline-block">
      <div className="  bg-black text-white flex items-center w-[5rem] gap-2 p-5 rounded-full group-hover:w-[12rem] overflow-hidden  transition-all duration-500 ease-in-out ">
        <i className=" text-[2.5rem]">{icon}</i>
        <span className="text-[1.2rem] ml-3 whitespace-nowrap font-bold group-hover:translate-x-0 opacity-0 translate-x-[-1rem] group-hover:opacity-100 transition-all duration-500 ease-in-out ">
          {reseau}
        </span>
      </div>
    </Link>
  );
};

export default ButtonHome;
