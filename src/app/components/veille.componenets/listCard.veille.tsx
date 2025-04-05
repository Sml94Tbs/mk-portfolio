import CardVeille from "@/app/components/veille.componenets/card.veille"
import { googleAlerts } from "@/app/data/googleAlerts"
const ListCard = () => {
    return (
        <div className="  grid grid-cols-[repeat(4,_1fr)] gap-[1.6rem] max-lg:grid-cols-[repeat(1,_1fr)]">
        { googleAlerts.map((alert, index) => (
            <CardVeille key={index} title={alert.title} date={alert.pubDate} desc={alert.snippet} link={alert.link}/>
        ))}
        
        </div>
    )
}

export default ListCard