import ListCard from "@/app/components/veille.componenets/listCard.veille";

const Veille = () => {
    return (
        <section className="bg-[#2C3E50]">
            <h1 className=" text-white text-[4.5rem] text-center max-lg:text-[3.2rem] font-bold">
                Ma veille technologique
            </h1>
            <ListCard/>
        </section>
    )
}

export default Veille;