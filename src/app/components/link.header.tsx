import Link from "next/link";

const LinkHeader = ({
  index,
  href,
  name,
}: {
  href: string;
  name: string;
  index: number;
}) => {
  return (
    <Link
      href={href}
      className="animate-slideTop ml-[3.5rem] text-black no-underline text-[1.8rem]	font-[500] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.3s] hover:text-[#8a2be2] opacity-0 "
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
