import Link from "next/link";

interface ButtonHomeProps {
    icon: React.ReactNode;
}

const ButtonHome = ({ icon }: ButtonHomeProps) => { 
    return (
        <Link href={''}>
            <div className=" bg-black text-white flex items-center gap-2">
            <i className="">{icon}</i>
            <p> Github</p>
            </div>
        </Link>
    )
}

export default ButtonHome;