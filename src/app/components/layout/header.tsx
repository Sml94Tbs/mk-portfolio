"use client";
import Link from "next/link";

const Header = () => {
  return (
    <header className=" fixed ">
      <div className=" top-0 left-0 p-[20px_120px]">
        <nav className="flex items-center justify-between z-[101]">
          <div className="">
            <Link href={'/'} className=" text-[25px] font-[600] cursor-default ">MK</Link>
            <div className="">
              <Link href={"/"} className=" inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"> About</Link>
              <Link href={"/"} className=" inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"> parecour</Link>
              <Link href={"/"} className=" inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"> stage</Link>
              <Link href={"/"} className=" inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"> compétence</Link>
              <Link href={"/"} className=" inline-block rounded-lg px-2 py-1 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"> projet</Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
