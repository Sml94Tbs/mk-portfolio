import LinkHeader from "./link.header";

type navLink = {
    href : string;
    name: string;
}
type naveProps = {
    links: navLink[];
};

const Navbar: React.FC<naveProps> = ({ links }) => {
    return(
        <nav className=" inline-block max-lg:hidden">
            {links.map(( link, index) => (
                <LinkHeader index={index} key={index} href={link.href} name={link.name}/>
            ))}
        </nav>
    )
}

export default Navbar

