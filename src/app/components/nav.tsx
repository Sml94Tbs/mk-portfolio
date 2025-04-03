import LinkHeader from "./link.header";

type navLink = {
    href : string;
    name: string;
}
type naveProps = {
    links: navLink[];
    isScoll: boolean;
};

const Navbar: React.FC<naveProps> = ({ links, isScoll }) => {
    return(
        <nav className=" inline-block max-lg:hidden">
            {links.map(( link, index) => (
                <LinkHeader index={index} key={index} href={link.href} name={link.name} isScoll={isScoll}/>
            ))}
        </nav>
    )
}

export default Navbar

