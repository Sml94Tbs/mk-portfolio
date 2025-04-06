import Link from "next/link";

interface ButtonHomeProps {
    icon: React.ReactNode;
    link: string;
    reseau: string;
}

const ButtonHome = ({ icon, link, reseau }: ButtonHomeProps) => { 
    return (
        <Link href={link}>
            <div className=" group bg-black text-white flex items-center overflow-hidden gap-2 p-5 rounded-[5rem]  transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]">
            <i className=" text-[2.5rem]">{icon}</i>
            <p className="text-[1.2rem] group-hover:block transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] ease-in-out hidden"> {reseau}</p>
            </div>
        </Link>
    )
}

export default ButtonHome;