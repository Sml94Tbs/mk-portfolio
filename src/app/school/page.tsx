import { projetEcole } from "@/app/data/projet";
import Projets from "@/app/components/template/projet";
export default function School() {
    return (
        <section className="bg-[#2C3E50] text-white">
            <h1 className="text-4xl font-bold text-center mb-6">Projets Scolaires</h1>
            <Projets projets={projetEcole}/>
        </section>
    )
}
