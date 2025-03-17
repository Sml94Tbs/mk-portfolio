import Link from "next/link";
const Icon = ({ icon }: { icon: any}) => {
  return (
    <Link
      className="p-7 border-solid rounded-[10px] hover:bg-white hover:text-black hover:border-[#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]"
      href=""
    >
      <i>
      {icon}
      </i>
    </Link>
  );
};

export default Icon;
