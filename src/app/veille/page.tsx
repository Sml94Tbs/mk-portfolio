"use client";
import ListCard from "@/app/components/veille.componenets/listCard.veille";
import Link from "next/link";

const Veille = () => {
    return (
        <>
        <Link href={"/#contact"} className=" fixed bottom-20 right-20 z-50">
        <button className=" bg-white text-black font-semibold text-[1.8rem] px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition" >
            retour
        </button>
        </Link>
        <section className=" bg-[#2C3E50] min-h-screen">
            <h1 className=" text-center text-white text-[3.2rem] font-semibold">Ensemble de ma veille technologique</h1>
            <h4></h4>
            <ListCard />
        </section>
        </>
    );
}
export default Veille;