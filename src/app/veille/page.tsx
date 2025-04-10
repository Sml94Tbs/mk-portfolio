"use client";
import ListCard from "@/app/components/veille.componenets/listCard.veille";
import Link from "next/link";

const Veille = () => {
    return (
        <>
        <Link href={"/"} className=" fixed bottom-20 right-20 z-50">
        <button className=" bg-white text-black px-4 py-2 rounded-full shadow-lg hover:bg-gray-200 transition" >
            retour
        </button>
        </Link>
        <section className=" bg-[#2C3E50] min-h-screen">
            <ListCard />
        </section>
        </>
    );
}
export default Veille;