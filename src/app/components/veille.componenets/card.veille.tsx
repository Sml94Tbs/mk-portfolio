import Link from "next/link"

const CardVeille = ({key, title, date, desc, link}:{key: number, title : string, date:string, desc: string, link:string}) => {
    return (
        <Link href={link} target="_blank">
            <div className=" bg-[#6185a8] flex justify-center text-white border-2 border-solid rounded-[1rem]  transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] hover:scale-[1.02]">
                <div className=" p-[1rem_3rem] w-[24.8rem]  text-center justify-center ">
                    <h2 className=" text-[2rem]  font-bold max-lg:text-[1.5rem]">
                        {title}
                    </h2>
                    <p className=" text-[1.5rem] font-bold max-lg:text-[1.2rem]">
                        {date}
                    </p>
                    <p className=" text-[1.2rem] font-bold max-lg:text-[1rem]">
                        {desc}
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default CardVeille