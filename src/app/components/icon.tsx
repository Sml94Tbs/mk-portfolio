"use client";

import Link from "next/link";
import { ReactNode, useEffect, useState } from "react";

const Icon = ({ icon }: { icon: ReactNode }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // ou un spinner/loader
  }

  return (
    <Link
      className="p-7 border-solid rounded-[10px] hover:bg-white hover:text-black hover:border-[#fff] transition-[cubic-bezier(0.25_0.1_0.25_1.0)] duration-[.5s]"
      href=""
    >
      {icon}
    </Link>
  );
};

export default Icon;
