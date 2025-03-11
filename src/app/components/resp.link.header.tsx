import Link from "next/link"

const respNav = ({href, name}:{href: string, name : string}) => {
    return (
        <Link href={href} className=" m-[3rem_0] block text-black no-underline text-[2rem] font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2]">{name}</Link>
    )
}

export default respNav