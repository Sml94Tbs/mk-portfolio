import Link from "next/link";

const LinkHeader = ({
  index,
  href,
  name,
  isScoll,
}: {
  href: string;
  name: string;
  index: number;
  isScoll: boolean;
}) => {
  return (
    <Link
      href={href}
      className={`animate-slideTop ml-[3.5rem]  no-underline text-[1.8rem] ${isScoll ? "text-white hover:border-white" : "text-black hover:border-black"} border-b-[2px] border-solid border-transparent	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s] opacity-0`}
      style={
        {
          "--i": index + 1,
          animationDelay: `calc(0.2s * ${index + 1}s)`
        } as React.CSSProperties
      }
    >
      {name}
    </Link>
  );
};

export default LinkHeader;
