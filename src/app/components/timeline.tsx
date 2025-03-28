import Text from "@/app/components/timeline.text";

type timeList = {
    titre: string;
    date: string;
    lieu: string;
}

type timelineProps = {
    abouts : timeList[];
};

const Timeline: React.FC<timelineProps> =({abouts}) => {
  return (
    <>
        { abouts.map(( about, index ) => (
            <div key={index} className="border-l-[0.2px] border-solid">
                <div className=" pl-[2.7rem] relative">
                    <Text index={index} titre={about.titre} date={about.date} lieu={about.lieu}/>
                </div>
            </div>
        ))}
    </>
  );
};

export default Timeline;
