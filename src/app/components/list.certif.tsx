type ListCertif = {
    titre : string,
    statue : string,
};
type ListCertifProps = {
    certif: ListCertif[];
};

const ListCertif: React.FC<ListCertifProps> = ({ certif }) => {
    return(
            <>
            {certif.map((certif, index) => (
                <div key={index} className=" text-white text-center m-[5rem]">
                    <h2 className="text-[1.872rem] mb-[1.2rem] font-semibold">{certif.titre}</h2>
                    <p className="text-[1.2rem]">{certif.statue}</p>
                </div>
            ))}
            </>
    )
}

export default ListCertif;