
type ListSkill = {
    titre : string,
    skill : string,
};

type ListSkillProps = {
    skills: ListSkill[];
};


const ListSKill: React.FC<ListSkillProps> = ({ skills }) => {
    return(
        <>
        {skills.map((skill, index) => (
            <div key={index} className="text-white text-center m-[5rem]">
                <h3 className=" text-[1.872rem] mb-[1.2rem] font-[600]">{skill.titre}</h3>
                <p className=" text-[1.2rem]">{skill.skill}</p>
            </div>
        ))}
        </>
    )
}

export default ListSKill;