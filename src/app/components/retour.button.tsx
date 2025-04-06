import Link from "next/link";
import { FaLongArrowAltLeft } from "react-icons/fa";

const Retour = ({ link }: { link: string }) => {
  return (
    <Link href={link}>
      <button className=" text-white font-[600] flex text-[1.8rem] items-center border border-solid p-8 rounded-[1rem] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:text-black hover:bg-white">
        <FaLongArrowAltLeft className=" mr-5" />
        Retour  
      </button>
    </Link>
  );
};

export default Retour;
