import Link from "next/link"

const Headers = () => {
    return (
        <header className=" top-0 left-0 w-full p-[20px_120px] fixed bg-transparent flex items-center justify-between z-[101] backdrop-blur-[16px] max-lg:p-[2rem_3%]">
            <Link href={"/"} className=" text-[2.5rem]">MK PROTFOLIO</Link>
        </header>
    )
}

export default Headers