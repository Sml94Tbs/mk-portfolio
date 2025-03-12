import RespNav from "@/app/components/resp.link.header";

type navLink = {
    href : string;
    name: string;
}
type naveProps = {
    links: navLink[];
    setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};
const navbar: React.FC<naveProps> = ({ links, setIsClick }) => {
    return (
        <nav className="hidden max-lg:block absolute rounded-[2rem] top-full left-0 w-full p-[5rem_9%] bg-[#ffffffd4] backdrop-blur-[16px] border-t-[.1rem] border-t-solid border-t-[#00000034] drop-shadow-[0_.5rem_1rem_#000000be]">
            {links.map(( link, index) => (
                <RespNav key={index} href={link.href} name={link.name} setIsClick={setIsClick}/>
            ))}
        </nav>
    )
}

export default navbar