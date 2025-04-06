const textTimeline = ({index, titre, date, lieu}:{ index : number, titre : string, date : string, lieu : string}) => {
    return (
        <div className="  before:top-0 mb-[3.2rem] rounded-[2rem] before:content-[''] before:absolute before:left-[-1.05rem] before:w-[20px] before:h-[20px] before:bg-[#fff] before:rounded-[50%] p-[2.4rem] border-solid border-[0.2rem]">
            <h3 className="text-[1.872rem] font-[600] text-white">{titre}</h3>
            <small className=" text-[1.1rem] text-white">{date}</small>
            <p className=" text-[1.6rem] text-white">{lieu}</p>
        </div>
    )
}

export default textTimeline