import RespNav from "@/app/components/resp.link.header";

type navLink = {
    href : string;
    name: string;
}
type naveProps = {
    links: navLink[];
};
const navbar: React.FC<naveProps> = ({ links }) => {
    return (
        <nav className="hidden max-lg:block absolute top-full left-0 w-full p-[5rem_9%] bg-[#462956d4] backdrop-blur-[16px] border-t-[.1rem] border-t-solid border-t-[#0000001a] drop-shadow-[0_.5rem_1rem_#0000001a]">
            {links.map(( link, index) => (
                <RespNav key={index} href={link.href} name={link.name}/>
            ))}
        </nav>
    )
}

export default navbar